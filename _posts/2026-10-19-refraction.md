---
layout: post
title: '屈折—媒質によって変わる波の速さと進む向き'
date: 2026-10-19 00:00:00 +0900
categories: [光学]
tags: [屈折, 光学入門]
math: true
toc: true
comments: false
permalink: /posts/refraction/
---

## この記事のポイント

- 屈折率、光の速さ、波長の関係
- 入射角と屈折角の関係
- 全反射と臨界角

<iframe class="simulator-frame" src="{{ '/assets/simulators/refraction-v1.2.html' | relative_url }}" title="屈折シミュレータ"></iframe>
<script src="{{ '/assets/js/simulator-frame.js' | relative_url }}" defer></script>


光が屈折率の異なる媒質へ斜めに入ると、進む向きが変わる。この現象を**屈折**という。ここでは、透明で等方的な二つの媒質の、静止した平らな境界を考える。

このシミュレータでは、入射角・屈折率・波長を変え、境界の前後での波面の向きと間隔を比較できる。

## 屈折率と波長

真空中の光の速さを $c$、媒質中で波面が進む速さ（**位相速度**）を $v$ とすると、**屈折率** $n$ は

$$
n=\frac{c}{v}
$$

で定義される。すなわち、屈折率 $n$ の媒質中では光の速さは真空中の $1/n$ 倍になる。

ただし、屈折率の異なる媒質の境界（**屈折率界面**）を光が通過しても周波数 $f$ は変わらない。「波の基本」で扱った $v=f\lambda$ の関係より、真空中の波長を $\lambda_0$、媒質中の波長を $\lambda$ とすると、

$$
\lambda=\frac{\lambda_0}{n}
$$

となる。すなわち、屈折率 $n$ の媒質中では波長も真空中の $1/n$ 倍になる。

## 入射角と屈折角

屈折率界面に向かう光を**入射光**、境界を通過する光を**屈折光**という。「波面」で扱った反射角と同様に、屈折率界面の法線を基準とし、入射光のなす角を**入射角**、界面を過ぎた後の屈折光のなす角を**屈折角**という。

入射側と屈折側の屈折率を $n_1,n_2$、入射角と屈折角を $\theta_1,\theta_2$ とすると、

$$
n_1\sin\theta_1=n_2\sin\theta_2
$$

が成り立つ。これを**スネルの法則**という。

一般に、屈折率の低い媒質から高い媒質へ光が進む $(n_1 < n_2)$ と、屈折光は法線に近づく。屈折率の高い媒質から低い媒質へ進む $(n_1 > n_2)$ と、屈折光は法線から離れるが、後述する臨界角を超えると全反射が発生する。

尚、垂直に入射した場合は、速さと波長が変わっても進む向きや角度は変わらない。

## 波面から見る屈折

屈折も、ホイヘンスの原理で波面の変化として捉えられる。

波面が境界へ斜めに到達すると、波面の各部分は異なる時刻に次の媒質へ入る。屈折率が大きい媒質へ入る場合、先に入った部分では波の進みが遅くなり、まだ入っていない部分はもとの速さで進む。

各点から広がる素元波に接する面を描くと、境界の前後で波面の向きが変わる。進行方向は波面に垂直なので、波面の向きの変化は光の進む向きの変化に対応する。この関係からも、スネルの法則が得られる。

## 全反射と臨界角

屈折率の高い媒質から低い媒質へ進む $(n_1 > n_2)$ とき、入射角を徐々に大きくすると、屈折角はやがて90°に達する。

屈折角が90°になる入射角を**臨界角** $\theta_c$ という。$n_1>n_2$ のとき、

$$
\sin\theta_c=\frac{n_2}{n_1}
$$

で求められる。

入射角が臨界角を超えると、低屈折率側の内部へ進む屈折光がなくなり、光は入射側へ反射される。これを**全反射**という。例えば、屈折率1.5の媒質から真空へ進む場合、臨界角は約41.8°である。

## 波長による屈折率の違い

屈折率は、同じ媒質でも光の周波数によって異なる。この性質を**分散**という。真空中では周波数と波長が一対一に対応するため、屈折率を真空中の波長 $\lambda_0$ の関数 $n(\lambda_0)$ として表すこともできる。

多くのガラスでは、短波長の光ほど屈折率が大きい。真空から同じ角度で入射させると、短波長の光ほど法線に近づく。このシミュレータにおいても、波長1.0を基準に、波長に対する屈折率が推移する。

尚、境界を通る一つの光の波長が変わることと、異なる周波数の光で屈折率が違うことは、別の話である。前者では周波数は変わらず、後者では周波数の異なる光を比べている。



## 参考資料

- OpenStax, [University Physics, Vol. 3, §1.3 Refraction](https://openstax.org/books/university-physics-volume-3/pages/1-3-refraction)
- OpenStax, [University Physics, Vol. 3, §1.6 Huygens’s Principle](https://openstax.org/books/university-physics-volume-3/pages/1-6-huygenss-principle)
- OpenStax, [University Physics, Vol. 3, §1.4 Total Internal Reflection](https://openstax.org/books/university-physics-volume-3/pages/1-4-total-internal-reflection)
- Feynman, Leighton and Sands, [The Feynman Lectures on Physics, Vol. I, Chapter 31: The Origin of the Refractive Index](https://www.feynmanlectures.caltech.edu/I_31.html), §§31–1, 31–3

<p class="article-disclaimer">掲載内容は著者個人の見解であり、所属組織・団体などを代表するものではない。一般化された情報の発信を目的とするものであり、個別具体的な事案に関しての助言を提供するものではない。</p>
