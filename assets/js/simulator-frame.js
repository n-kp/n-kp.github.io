(() => {
  const frame = document.querySelector('.simulator-frame');
  if (!frame) return;

  // Runs within the original sandbox, without changing its permissions.
  function reportHeight() {
    document.documentElement.style.overflowY = 'hidden';
    document.body.style.overflowY = 'hidden';
    let previous = 0;
    const report = () => {
      const height = Math.ceil(document.body.getBoundingClientRect().height +
        parseFloat(getComputedStyle(document.body).marginTop || 0) +
        parseFloat(getComputedStyle(document.body).marginBottom || 0));
      if (height !== previous) {
        previous = height;
        window.top.postMessage({ type: 'simulator-height', height }, '*');
      }
    };
    new ResizeObserver(report).observe(document.body);
    window.addEventListener('load', report);
    report();
  }

  let nested;
  let observer;
  const initialise = () => {
    observer?.disconnect();
    const doc = frame.contentDocument;
    if (!doc?.body) return;
    doc.documentElement.style.overflowY = 'hidden';
    doc.body.style.overflowY = 'hidden';
    nested = doc.querySelector('#codex-visualization');
    if (nested) {
      window.addEventListener('message', event => {
        if (event.source !== nested.contentWindow || event.data?.type !== 'simulator-height') return;
        const height = event.data.height;
        if (!Number.isFinite(height) || height <= 0 || height > 100000) return;
        nested.style.height = `${height}px`;
        frame.style.height = `${Math.ceil(doc.body.getBoundingClientRect().height)}px`;
      });
      // Preserve the original bootstrap and all simulation code.
      nested.srcdoc += `<script>(${reportHeight.toString()})();<\/script>`;
    } else {
      // Include the final section's margin in the measured document height.
      doc.body.style.display = 'flow-root';
      const resize = () => {
        frame.style.height = `${Math.ceil(doc.body.getBoundingClientRect().height)}px`;
      };
      observer = new ResizeObserver(resize);
      observer.observe(doc.body);
      resize();
    }
  };
  frame.addEventListener('load', initialise, { once: true });
  if (frame.contentDocument?.readyState === 'complete' && frame.contentDocument.URL !== 'about:blank') {
    frame.removeEventListener('load', initialise);
    initialise();
  }
})();
