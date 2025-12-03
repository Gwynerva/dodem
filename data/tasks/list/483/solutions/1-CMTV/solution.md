В числителе воспользуемся формулой разности косинусов (см. указание), а так же приведем знаменатель к такому виду, чтобы удобно было сократить появившуюся двойку:

$$
  \limf{x}{a} \frac{\cos x - \cos a}{x - a} = \limf{x}{a} \frac{-\cancel{2}\sin\left( \dfrac{x+a}{2} \right)\sin\left( \dfrac{x-a}{2} \right)}{\cancel{2}\dfrac{x-a}{2}} = \ldots
$$

Замечаем, что дробь в знаменателе и аргумент второго синуса одинаковые.
И при этом делятся друг на друга.
А это и есть <b:[первый замечательный предел](advanced/proto/f-lim/first-wonderful)>, который можно получить, совершив замену перменной и использовав <b:[теорему о пределе сложной функции](advanced/proto/f-lim/composition)>:

$$
  \ldots = -\limf{x}{a} \frac{\sin\left( \dfrac{x+a}{2} \right)\sin\left( \dfrac{x-a}{2} \right)}{\dfrac{x-a}{2}} = \scope{ y = \frac{x-a}{2} \\[10px] \limf{x}{a} y(x) = \limf{x}{a} \frac{x-a}{2} = \frac{a-a}{2} = 0 \\[10px] y \to 0 } = \\[10px]
  = - \limf{x}{a} \sin\left(\frac{x+a}{2}\right) \limf{y}{0} \frac{\sin y}{y} = \ldots
$$

Справа получили первый замечательный предел, который стремится к $1$.
Слева же можно воспользоваться <b:[непрерывностью синуса](advanced/proto/f-continuity/trigonom)> и напрямую подставить $a$ вместо $x$:

$$
  \ldots = -\sin\left( \frac{a + a}{2} \right) = -\sin(a)
$$
