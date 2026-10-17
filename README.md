# ¬(¬Kp)

A personal blog exploring shape, science, medicine and healthcare, with interactive optics simulators. Built with Jekyll and Chirpy, and published on GitHub Pages.

**[Visit the blog](https://n-kp.github.io/)** · **[Explore the simulators](https://n-kp.github.io/optics/)**

The site and simulator interfaces are in Japanese. The author's ASCII name is **n-kp**.

## Optics simulators

- **Wavefront** — wave propagation, diffraction and interference.
- **Refraction** — reflection, refraction and total internal reflection.
- **Lens** — lens orientation, focusing and aberrations.
- **Focus** — intensity distributions near the focus and spot-size measurements.

See the [simulator guide](guide/simulators.md) for downloads, controls, units and model limitations, and the [changelog](CHANGELOG.md) for release notes.

## Run locally

Install Ruby 3.4 and Bundler, then run these commands from the repository root:

```sh
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve
```

Open <http://127.0.0.1:4000/>. Stop the server with `Ctrl+C`. Restart it after changing `_config.yml`.

Pushes to `main` trigger the GitHub Actions build, internal link checks and deployment. The repository's Pages publishing source must be set to **GitHub Actions**.

## Licence

Copyright © 2026 n-kp.

The author's simulator code, this README and the simulator guide are provided under the [MIT Licence](LICENSE). External libraries and icons retain their own licences; see [third-party notices](THIRD_PARTY_NOTICES.md).

This licence does not automatically cover blog articles, illustrations or third-party material. Refer to their individual notices.
