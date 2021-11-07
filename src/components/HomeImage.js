import React, { useEffect, useRef } from "react"
import styled from '@emotion/styled';
import { valuesMap } from './../utils/valuesMap';
import { debounce } from './../utils/debounce';

const StyledImage = styled.svg`
  position: relative;
  width: 110%;
  margin-left: -15%;
  margin-bottom: -5%;

  @media(max-width: 1410px) {
    width: auto;
    margin-left: -5%;
    margin-right: 5%;
  }

  @media(max-width: 992px) {
    width: 100%;
    display: block;
    max-width: 600px;
    margin: auto;
    margin-bottom: -35%;
  }

  @media(max-width: 640px) {
    margin-bottom: -45%;
  }

  & #home__background {
    position: relative;
    animation-name: background;
    animation-duration: 10s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  & #home__leafs {
    position: relative;
    animation-name: leafs;
    animation-duration: 7s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  & #home__person_right,
  & #home__person_left {
    position: relative;
    animation-name: people;
    animation-duration: 6s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes background {
    from {
      transform: translateX(1%);
    }
    to {
      transform: translateX(-3%);
    }
  }

  @keyframes leafs {
    from {
      transform: translateX(-1%);
    }
    to {
      transform: translateX(1%);
    }
  }

  @keyframes people {
    from {
      transform: translateX(1%);
    }
    to {
      transform: translateX(-1%);
    }
  }

  #home__image_arm {
    transform-origin: right;
    transform-box: fill-box;
    transition: transform 2s;
  }
`;

function HomeImage(props) {

  const ref = useRef(null);

  useEffect(() => {
    const img = ref.current;

    const onMove = debounce((e) => {
      const arm = img.getElementById('home__image_arm');

      const diff = e.offsetY - img.clientHeight / 2;

      let angle = 0;

      if (diff > 0) {
        angle = -valuesMap(diff, 0, img.clientHeight / 2, 0, 40);
      } else {
        angle = valuesMap(diff, -img.clientHeight / 2, 0, 12, 0);
      }

      if (angle > 12) {
        angle = 12
      } else if (angle < -40) {
        angle = -40;
      };

      arm.style.transform = `rotate(${angle}deg)`
    }, 500);

    // if (img) {
    //   img.addEventListener('mousemove', onMove);
    // }

    return () => {
      // img.removeEventListener('mousemove', onMove);

    }
  }, [ref])

  return (
    <StyledImage
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1128.98 847.366"
      {...props}
    >
      <defs>
        <linearGradient
          id="home__Gradient_bez_nazwy_25"
          x1={384.242}
          y1={481.939}
          x2={395.245}
          y2={481.939}
          gradientTransform="rotate(-2.776 -3871.995 161.686)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#88d392" />
          <stop offset={0.376} stopColor="#66bd8f" />
          <stop offset={1} stopColor="#66ab86" />
        </linearGradient>
        <linearGradient
          id="home__Gradient_bez_nazwy_25-2"
          x1={323.608}
          y1={543.343}
          x2={396.813}
          y2={543.343}
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-3"
          x1={280.499}
          y1={513.426}
          x2={374.522}
          y2={513.426}
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-4"
          x1={254.145}
          y1={480.203}
          x2={348.083}
          y2={480.203}
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-5"
          x1={232.516}
          y1={454.504}
          x2={332.19}
          y2={454.504}
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-6"
          x1={226.501}
          y1={429.952}
          x2={318.38}
          y2={429.952}
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-7"
          x1={192.861}
          y1={395.832}
          x2={294.543}
          y2={395.832}
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-8"
          x1={204.872}
          y1={365.607}
          x2={285.319}
          y2={365.607}
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-9"
          x1={205.498}
          y1={328.924}
          x2={270.497}
          y2={328.924}
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-10"
          x1={221.414}
          y1={286.978}
          x2={257.354}
          y2={286.978}
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-11"
          x1={362.202}
          y1={468.216}
          x2={374.398}
          y2={468.216}
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-12"
          x1={351.583}
          y1={447.606}
          x2={360.007}
          y2={447.606}
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-13"
          x1={334.848}
          y1={436.071}
          x2={343.336}
          y2={436.071}
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-14"
          x1={322.922}
          y1={408.9}
          x2={331.017}
          y2={408.9}
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-15"
          x1={309.123}
          y1={391.029}
          x2={317.218}
          y2={391.029}
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-16"
          x1={292.101}
          y1={362.758}
          x2={300.197}
          y2={362.758}
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-17"
          x1={273.099}
          y1={328.753}
          x2={283.072}
          y2={328.753}
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-18"
          x1={259.45}
          y1={300.28}
          x2={268.467}
          y2={300.28}
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-19"
          x1={256.364}
          y1={442.829}
          x2={417.92}
          y2={442.829}
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-20"
          x1={-6737.23}
          y1={182.682}
          x2={-6726.227}
          y2={182.682}
          gradientTransform="scale(-1 1) rotate(-2.775 -860.569 -124164.54)"
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-21"
          x1={-6797.865}
          y1={244.086}
          x2={-6724.66}
          y2={244.086}
          gradientTransform="scale(-1 1) rotate(-2.775 -860.569 -124164.54)"
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-22"
          x1={-6840.974}
          y1={214.169}
          x2={-6746.95}
          y2={214.169}
          gradientTransform="scale(-1 1) rotate(-2.775 -860.569 -124164.54)"
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-23"
          x1={-6867.327}
          y1={180.946}
          x2={-6773.39}
          y2={180.946}
          gradientTransform="scale(-1 1) rotate(-2.775 -860.569 -124164.54)"
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-24"
          x1={-6888.956}
          y1={155.247}
          x2={-6789.282}
          y2={155.247}
          gradientTransform="scale(-1 1) rotate(-2.775 -860.569 -124164.54)"
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-25"
          x1={-6894.971}
          y1={130.695}
          x2={-6803.093}
          y2={130.695}
          gradientTransform="scale(-1 1) rotate(-2.775 -860.569 -124164.54)"
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-26"
          x1={-6928.612}
          y1={96.575}
          x2={-6826.929}
          y2={96.575}
          gradientTransform="scale(-1 1) rotate(-2.775 -860.569 -124164.54)"
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-27"
          x1={-6916.6}
          y1={66.35}
          x2={-6836.154}
          y2={66.35}
          gradientTransform="scale(-1 1) rotate(-2.775 -860.569 -124164.54)"
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-28"
          x1={-6915.975}
          y1={29.667}
          x2={-6850.975}
          y2={29.667}
          gradientTransform="scale(-1 1) rotate(-2.775 -860.569 -124164.54)"
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-29"
          x1={-6900.058}
          y1={-12.279}
          x2={-6864.119}
          y2={-12.279}
          gradientTransform="scale(-1 1) rotate(-2.775 -860.569 -124164.54)"
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-30"
          x1={-6759.27}
          y1={168.959}
          x2={-6747.074}
          y2={168.959}
          gradientTransform="scale(-1 1) rotate(-2.775 -860.569 -124164.54)"
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-31"
          x1={-6769.89}
          y1={148.349}
          x2={-6761.466}
          y2={148.349}
          gradientTransform="scale(-1 1) rotate(-2.775 -860.569 -124164.54)"
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-32"
          x1={-6786.624}
          y1={136.814}
          x2={-6778.136}
          y2={136.814}
          gradientTransform="scale(-1 1) rotate(-2.775 -860.569 -124164.54)"
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-33"
          x1={-6798.551}
          y1={109.644}
          x2={-6790.456}
          y2={109.644}
          gradientTransform="scale(-1 1) rotate(-2.775 -860.569 -124164.54)"
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-34"
          x1={-6812.349}
          y1={91.772}
          x2={-6804.254}
          y2={91.772}
          gradientTransform="scale(-1 1) rotate(-2.775 -860.569 -124164.54)"
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-35"
          x1={-6829.371}
          y1={63.501}
          x2={-6821.276}
          y2={63.501}
          gradientTransform="scale(-1 1) rotate(-2.775 -860.569 -124164.54)"
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-36"
          x1={-6848.373}
          y1={29.496}
          x2={-6838.401}
          y2={29.496}
          gradientTransform="scale(-1 1) rotate(-2.775 -860.569 -124164.54)"
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-37"
          x1={-6862.023}
          y1={1.023}
          x2={-6853.006}
          y2={1.023}
          gradientTransform="scale(-1 1) rotate(-2.775 -860.569 -124164.54)"
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__Gradient_bez_nazwy_25-38"
          x1={-6865.109}
          y1={143.572}
          x2={-6703.553}
          y2={143.572}
          gradientTransform="scale(-1 1) rotate(-2.775 -860.569 -124164.54)"
          xlinkHref="#home__Gradient_bez_nazwy_25"
        />
        <linearGradient
          id="home__linear-gradient"
          x1={-1502.163}
          y1={3597.343}
          x2={-1473.578}
          y2={3611.83}
          gradientTransform="rotate(-52.913 -3823.518 227.492)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.376} stopColor="#00a651" />
          <stop offset={0.778} stopColor="#005826" />
        </linearGradient>
        <linearGradient
          id="home__linear-gradient-2"
          x1={-1546.671}
          y1={3610.532}
          x2={-1482.819}
          y2={3642.892}
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-3"
          x1={-1592.403}
          y1={3632.304}
          x2={-1488.425}
          y2={3685}
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-4"
          x1={-1624.71}
          y1={3667.627}
          x2={-1510.49}
          y2={3725.513}
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-5"
          x1={-1648.055}
          y1={3713.926}
          x2={-1523.019}
          y2={3777.294}
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-6"
          x1={-1642.763}
          y1={3769.001}
          x2={-1530.676}
          y2={3825.806}
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-7"
          x1={-1432.379}
          y1={3600.962}
          x2={-1532.839}
          y2={3618.714}
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-8"
          x1={-1407.035}
          y1={3628.487}
          x2={-1556.582}
          y2={3654.912}
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-9"
          x1={-1389.139}
          y1={3663.158}
          x2={-1590.887}
          y2={3698.809}
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-10"
          x1={-1416.186}
          y1={3712.386}
          x2={-1596.518}
          y2={3744.252}
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-11"
          x1={-1342.52}
          y1={3747.231}
          x2={-1592.181}
          y2={3791.348}
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-12"
          x1={-1482.341}
          y1={3796.696}
          x2={-1548.07}
          y2={3835.001}
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-13"
          x1={-1438.665}
          y1={3738.531}
          x2={-1564.489}
          y2={3760.765}
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-14"
          x1={-6212.182}
          y1={-2796.443}
          x2={-6191.543}
          y2={-2785.983}
          gradientTransform="matrix(-.52461 -.82932 -.83873 .53056 -4724.282 -3186.999)"
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-15"
          x1={-6244.317}
          y1={-2786.921}
          x2={-6198.215}
          y2={-2763.557}
          gradientTransform="matrix(-.52461 -.82932 -.83873 .53056 -4724.282 -3186.999)"
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-16"
          x1={-6277.336}
          y1={-2771.201}
          x2={-6202.263}
          y2={-2733.154}
          gradientTransform="matrix(-.52461 -.82932 -.83873 .53056 -4724.282 -3186.999)"
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-17"
          x1={-6300.662}
          y1={-2745.698}
          x2={-6218.195}
          y2={-2703.904}
          gradientTransform="matrix(-.52461 -.82932 -.83873 .53056 -4724.282 -3186.999)"
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-18"
          x1={-6317.517}
          y1={-2712.269}
          x2={-6227.241}
          y2={-2666.518}
          gradientTransform="matrix(-.52461 -.82932 -.83873 .53056 -4724.282 -3186.999)"
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-19"
          x1={-6313.696}
          y1={-2672.505}
          x2={-6232.769}
          y2={-2631.492}
          gradientTransform="matrix(-.52461 -.82932 -.83873 .53056 -4724.282 -3186.999)"
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-20"
          x1={-6161.798}
          y1={-2793.83}
          x2={-6234.331}
          y2={-2781.013}
          gradientTransform="matrix(-.52461 -.82932 -.83873 .53056 -4724.282 -3186.999)"
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-21"
          x1={-6143.499}
          y1={-2773.957}
          x2={-6251.473}
          y2={-2754.878}
          gradientTransform="matrix(-.52461 -.82932 -.83873 .53056 -4724.282 -3186.999)"
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-22"
          x1={-6130.578}
          y1={-2748.924}
          x2={-6276.241}
          y2={-2723.184}
          gradientTransform="matrix(-.52461 -.82932 -.83873 .53056 -4724.282 -3186.999)"
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-23"
          x1={-6150.106}
          y1={-2713.381}
          x2={-6280.307}
          y2={-2690.374}
          gradientTransform="matrix(-.52461 -.82932 -.83873 .53056 -4724.282 -3186.999)"
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-24"
          x1={-6096.919}
          y1={-2688.223}
          x2={-6277.175}
          y2={-2656.371}
          gradientTransform="matrix(-.52461 -.82932 -.83873 .53056 -4724.282 -3186.999)"
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-25"
          x1={-6197.871}
          y1={-2652.509}
          x2={-6245.327}
          y2={-2624.853}
          gradientTransform="matrix(-.52461 -.82932 -.83873 .53056 -4724.282 -3186.999)"
          xlinkHref="#home__linear-gradient"
        />
        <linearGradient
          id="home__linear-gradient-26"
          x1={-6166.336}
          y1={-2694.505}
          x2={-6257.182}
          y2={-2678.452}
          gradientTransform="matrix(-.52461 -.82932 -.83873 .53056 -4724.282 -3186.999)"
          xlinkHref="#home__linear-gradient"
        />
        <radialGradient
          id="home__Gradient_bez_nazwy_22"
          cx={678.953}
          cy={271.801}
          r={38.258}
          gradientTransform="rotate(28.064 706.197 283.237)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" stopOpacity={0} />
          <stop offset={0.108} stopColor="#f8fcfe" stopOpacity={0.029} />
          <stop offset={0.261} stopColor="#e3f4fb" stopOpacity={0.11} />
          <stop offset={0.44} stopColor="#c2e7f7" stopOpacity={0.244} />
          <stop offset={0.638} stopColor="#93d5f0" stopOpacity={0.43} />
          <stop offset={0.851} stopColor="#58bde8" stopOpacity={0.665} />
          <stop offset={1} stopColor="#29abe2" stopOpacity={0.85} />
        </radialGradient>
        <style>
          {
            ".home__cls-73{fill:#d4eeff}.home__cls-3{fill:#88d392}.home__cls-41{opacity:.6}.home__cls-68{fill:#ef9849}.home__cls-69{fill:#e7f1fd}.home__cls-71{fill:#e68639}.home__cls-72{fill:#e6e6e6}.home__cls-74{fill:#ffaf7b}.home__cls-75{fill:#2b468b}.home__cls-77{fill:#23395e}.home__cls-78{fill:#253765}.home__cls-79{fill:#ee985f}.home__cls-82{fill:#2a4f96}.home__cls-85{fill:#1b406d}.home__cls-86{fill:#213c73}"
          }
        </style>
      </defs>
      <path
        d="M100.807 526.55S35.803 286.455 307.91 140.746 869.68 17.858 989.057 79.302s-3.511 236.997 18.433 280.885 134.735 135.678 5.71 246.271c-99.231 85.055-557.021 119.45-787.8 37.247-69.292-24.681-109.987-73.062-124.593-117.154z"
        stroke="#d4eeff"
        strokeMiterlimit={10}
        strokeWidth={0.878}
        fill="#d4eeff"
        id="home__background"
      />
      <g id="home__leafs">
        <path
          d="M403.598 326.255s-12.032-51.59-10.234-101.948c0 0 21.577 69.137 10.234 101.948z"
          fill="url(#home__Gradient_bez_nazwy_25)"
        />
        <path
          className="home__cls-3"
          d="M403.598 326.255s-21.915-18.432-10.234-101.948c0 0 6.823 71.89 10.234 101.948z"
        />
        <path
          d="M410.198 334.365a245.333 245.333 0 00-73.092 4.12s43.997 10.681 73.092-4.12z"
          fill="url(#home__Gradient_bez_nazwy_25-2)"
        />
        <path
          className="home__cls-3"
          d="M410.198 334.365s-5.58-17.727-73.092 4.12c0 0 51.691-3.268 73.092-4.12z"
        />
        <path
          d="M387.141 319.099s-46.777-16.92-95.095-19.825c0 0 61.616 28.156 95.095 19.825z"
          fill="url(#home__Gradient_bez_nazwy_25-3)"
        />
        <path
          className="home__cls-3"
          d="M387.141 319.099s-13.255-23.751-95.095-19.825c0 0 67.134 13.584 95.095 19.825z"
        />
        <path
          d="M359.353 291.92s-47.643-20.89-95.43-28.517c0 0 63.33 33.137 95.43 28.517z"
          fill="url(#home__Gradient_bez_nazwy_25-4)"
        />
        <path
          className="home__cls-3"
          d="M359.353 291.92s-15.355-24.07-95.43-28.517c0 0 67.33 19.738 95.43 28.517z"
        />
        <path
          d="M342.418 270.803s-51.114-24.629-101.519-35.638c0 0 68.293 38.253 101.52 35.638z"
          fill="url(#home__Gradient_bez_nazwy_25-5)"
        />
        <path
          className="home__cls-3"
          d="M342.418 270.803s-17.597-25.75-101.519-35.638c0 0 71.602 24.752 101.52 35.638z"
        />
        <path
          d="M327.818 254.85s-46.51-32.677-94.498-51.802c0 0 61.285 48.936 94.498 51.803z"
          fill="url(#home__Gradient_bez_nazwy_25-6)"
        />
        <path
          className="home__cls-3"
          d="M327.818 254.85s-13.25-28.29-94.498-51.802c0 0 66.711 36.158 94.498 51.803z"
        />
        <path
          d="M302.277 220.268s-50.52-31.65-104.13-48.013c0 0 65.974 48.268 104.13 48.013z"
          fill="url(#home__Gradient_bez_nazwy_25-7)"
        />
        <path
          className="home__cls-3"
          d="M302.277 220.268s-12.463-30.213-104.13-48.013c0 0 73.553 33.434 104.13 48.013z"
        />
        <path
          d="M292.309 205.156s-38.36-45.932-84.337-78.304c0 0 47.968 66.574 84.337 78.304z"
          fill="url(#home__Gradient_bez_nazwy_25-8)"
        />
        <path
          className="home__cls-3"
          d="M292.309 205.156s-2.603-32.624-84.337-78.304c0 0 59.719 54.855 84.337 78.304z"
        />
        <path
          d="M275.768 170.059s-32.304-46.32-68.988-80.702c0 0 41.216 66.435 68.988 80.702z"
          fill="url(#home__Gradient_bez_nazwy_25-9)"
        />
        <path
          className="home__cls-3"
          d="M275.768 170.059s-4.84-30.64-68.988-80.702c0 0 48.798 56.593 68.988 80.702z"
        />
        <path
          d="M261.004 136.948s-16.457-54.183-40.752-98.408c0 0 18.74 76.1 40.752 98.408z"
          fill="url(#home__Gradient_bez_nazwy_25-10)"
        />
        <path
          className="home__cls-3"
          d="M261.004 136.948s4.826-30.63-40.752-98.408c0 0 28.976 69.142 40.752 98.408z"
        />
        <path
          d="M383.608 310.798s-13.105-49.093-13.694-96.406c0 0 22.478 66.035 13.694 96.406z"
          fill="url(#home__Gradient_bez_nazwy_25-11)"
        />
        <path
          className="home__cls-3"
          d="M383.608 310.798s-20.558-18.331-13.694-96.406c0 0 9.302 67.964 13.694 96.406z"
        />
        <path
          d="M365.375 291.262s-8.358-50.14-4.426-97.284c0 0 16.07 67.918 4.426 97.284z"
          fill="url(#home__Gradient_bez_nazwy_25-12)"
        />
        <path
          className="home__cls-3"
          d="M365.375 291.262s-18.713-20.255-4.426-97.284c0 0 2.77 68.548 4.426 97.284z"
        />
        <path
          d="M350.265 277.695s-9.635-47.495-8.41-91.588c0 0 17.193 64.562 8.41 91.588z"
          fill="url(#home__Gradient_bez_nazwy_25-13)"
        />
        <path
          className="home__cls-3"
          d="M350.265 277.695s-17.27-19.92-8.41-91.588c0 0 5.621 64.518 8.41 91.588z"
        />
        <path
          d="M332.695 254.916s-4.915-52.276.895-99.182c0 0 10.858 71.714-.895 99.182z"
          fill="url(#home__Gradient_bez_nazwy_25-14)"
        />
        <path
          className="home__cls-3"
          d="M332.695 254.916s-15.554-24.038.895-99.182c0 0-.94 69.82-.895 99.182z"
        />
        <path
          d="M318.048 237.734s-4.915-52.276.895-99.183c0 0 10.858 71.715-.895 99.183z"
          fill="url(#home__Gradient_bez_nazwy_25-15)"
        />
        <path
          className="home__cls-3"
          d="M318.048 237.734s-15.555-24.038.895-99.183c0 0-.94 69.82-.895 99.183z"
        />
        <path
          d="M299.677 210.32s-4.915-52.276.895-99.183c0 0 10.858 71.715-.895 99.183z"
          fill="url(#home__Gradient_bez_nazwy_25-16)"
        />
        <path
          className="home__cls-3"
          d="M299.677 210.32s-15.555-24.038.895-99.183c0 0-.94 69.82-.895 99.183z"
        />
        <path
          d="M278.568 173.813s-3.082-48.493 4.566-92.39c0 0 8.42 66.37-4.566 92.39z"
          fill="url(#home__Gradient_bez_nazwy_25-17)"
        />
        <path
          className="home__cls-3"
          d="M278.568 173.813s-14.962-21.797 4.566-92.39c0 0-3.53 65.05-4.566 92.39z"
        />
        <path
          d="M263.342 141.647s-2.79-43.865 4.125-83.573c0 0 7.62 60.037-4.125 83.573z"
          fill="url(#home__Gradient_bez_nazwy_25-18)"
        />
        <path
          className="home__cls-3"
          d="M263.342 141.647s-13.534-19.718 4.125-83.573c0 0-3.189 58.842-4.125 83.573z"
        />
        <path
          d="M259.706 130.603s12.109 46.577 44.818 93.435 92.39 115.54 125.594 122.803c0 0 4.68-4.797-1.756-6.998s-32.076-16.704-54.716-40.731-46.76-46.968-67.802-81.558-46.138-86.951-46.138-86.951z"
          fill="url(#home__Gradient_bez_nazwy_25-19)"
        />
        <path
          d="M700.602 372.195s12.032-51.59 10.235-101.948c0 0-21.578 69.137-10.235 101.948z"
          fill="url(#home__Gradient_bez_nazwy_25-20)"
        />
        <path
          className="home__cls-3"
          d="M700.602 372.195s21.915-18.432 10.235-101.948c0 0-6.824 71.89-10.235 101.948z"
        />
        <path
          d="M694.002 380.305a245.333 245.333 0 0173.092 4.12s-43.997 10.68-73.092-4.12z"
          fill="url(#home__Gradient_bez_nazwy_25-21)"
        />
        <path
          className="home__cls-3"
          d="M694.002 380.305s5.58-17.727 73.092 4.12c0 0-51.691-3.268-73.092-4.12z"
        />
        <path
          d="M717.06 365.039s46.776-16.92 95.094-19.825c0 0-61.616 28.156-95.095 19.825z"
          fill="url(#home__Gradient_bez_nazwy_25-22)"
        />
        <path
          className="home__cls-3"
          d="M717.06 365.039s13.254-23.751 95.094-19.825c0 0-67.134 13.584-95.095 19.825z"
        />
        <path
          d="M744.847 337.86s47.643-20.89 95.43-28.517c0 0-63.33 33.137-95.43 28.517z"
          fill="url(#home__Gradient_bez_nazwy_25-23)"
        />
        <path
          className="home__cls-3"
          d="M744.847 337.86s15.355-24.07 95.43-28.517c0 0-67.33 19.738-95.43 28.517z"
        />
        <path
          d="M761.782 316.743s51.114-24.629 101.52-35.638c0 0-68.294 38.253-101.52 35.638z"
          fill="url(#home__Gradient_bez_nazwy_25-24)"
        />
        <path
          className="home__cls-3"
          d="M761.782 316.743s17.597-25.75 101.52-35.638c0 0-71.603 24.752-101.52 35.638z"
        />
        <path
          d="M776.382 300.79s46.51-32.677 94.498-51.802c0 0-61.285 48.936-94.498 51.803z"
          fill="url(#home__Gradient_bez_nazwy_25-25)"
        />
        <path
          className="home__cls-3"
          d="M776.382 300.79s13.25-28.29 94.498-51.802c0 0-66.711 36.158-94.498 51.803z"
        />
        <path
          d="M801.923 266.208s50.52-31.65 104.13-48.013c0 0-65.974 48.268-104.13 48.013z"
          fill="url(#home__Gradient_bez_nazwy_25-26)"
        />
        <path
          className="home__cls-3"
          d="M801.923 266.208s12.463-30.213 104.13-48.013c0 0-73.553 33.434-104.13 48.013z"
        />
        <path
          d="M811.891 251.096s38.36-45.932 84.338-78.304c0 0-47.969 66.574-84.338 78.304z"
          fill="url(#home__Gradient_bez_nazwy_25-27)"
        />
        <path
          className="home__cls-3"
          d="M811.891 251.096s2.603-32.624 84.338-78.304c0 0-59.72 54.855-84.338 78.304z"
        />
        <path
          d="M828.432 215.999s32.304-46.32 68.988-80.702c0 0-41.216 66.435-68.988 80.702z"
          fill="url(#home__Gradient_bez_nazwy_25-28)"
        />
        <path
          className="home__cls-3"
          d="M828.432 215.999s4.84-30.64 68.988-80.702c0 0-48.797 56.593-68.988 80.702z"
        />
        <path
          d="M843.196 182.888s16.458-54.183 40.752-98.408c0 0-18.74 76.1-40.752 98.408z"
          fill="url(#home__Gradient_bez_nazwy_25-29)"
        />
        <path
          className="home__cls-3"
          d="M843.196 182.888s-4.826-30.63 40.752-98.408c0 0-28.976 69.142-40.752 98.408z"
        />
        <path
          d="M720.592 356.738s13.105-49.093 13.694-96.406c0 0-22.478 66.035-13.694 96.406z"
          fill="url(#home__Gradient_bez_nazwy_25-30)"
        />
        <path
          className="home__cls-3"
          d="M720.592 356.738s20.558-18.331 13.694-96.406c0 0-9.302 67.964-13.694 96.406z"
        />
        <path
          d="M738.825 337.202s8.358-50.14 4.426-97.284c0 0-16.07 67.918-4.426 97.284z"
          fill="url(#home__Gradient_bez_nazwy_25-31)"
        />
        <path
          className="home__cls-3"
          d="M738.825 337.202s18.713-20.255 4.426-97.284c0 0-2.77 68.548-4.426 97.284z"
        />
        <path
          d="M753.935 323.635s9.635-47.495 8.41-91.588c0 0-17.193 64.562-8.41 91.588z"
          fill="url(#home__Gradient_bez_nazwy_25-32)"
        />
        <path
          className="home__cls-3"
          d="M753.935 323.635s17.27-19.92 8.41-91.588c0 0-5.621 64.518-8.41 91.588z"
        />
        <path
          d="M771.505 300.856s4.915-52.276-.895-99.182c0 0-10.858 71.714.895 99.182z"
          fill="url(#home__Gradient_bez_nazwy_25-33)"
        />
        <path
          className="home__cls-3"
          d="M771.505 300.856s15.554-24.038-.895-99.182c0 0 .94 69.82.895 99.182z"
        />
        <path
          d="M786.153 283.674s4.914-52.276-.895-99.183c0 0-10.859 71.715.895 99.183z"
          fill="url(#home__Gradient_bez_nazwy_25-34)"
        />
        <path
          className="home__cls-3"
          d="M786.153 283.674s15.554-24.038-.895-99.183c0 0 .939 69.82.895 99.183z"
        />
        <path
          d="M804.523 256.26s4.915-52.276-.895-99.183c0 0-10.858 71.715.895 99.183z"
          fill="url(#home__Gradient_bez_nazwy_25-35)"
        />
        <path
          className="home__cls-3"
          d="M804.523 256.26s15.555-24.038-.895-99.183c0 0 .94 69.82.895 99.183z"
        />
        <path
          d="M825.632 219.753s3.082-48.493-4.566-92.39c0 0-8.42 66.37 4.566 92.39z"
          fill="url(#home__Gradient_bez_nazwy_25-36)"
        />
        <path
          className="home__cls-3"
          d="M825.632 219.753s14.962-21.797-4.566-92.39c0 0 3.53 65.05 4.566 92.39z"
        />
        <path
          d="M840.858 187.587s2.79-43.865-4.125-83.573c0 0-7.62 60.037 4.125 83.573z"
          fill="url(#home__Gradient_bez_nazwy_25-37)"
        />
        <path
          className="home__cls-3"
          d="M840.858 187.587s13.534-19.718-4.125-83.573c0 0 3.19 58.842 4.125 83.573z"
        />
        <path
          d="M844.494 176.543s-12.109 46.576-44.818 93.435-92.39 115.54-125.593 122.803c0 0-4.68-4.797 1.756-6.998s32.075-16.704 54.715-40.731 46.76-46.968 67.802-81.558 46.138-86.951 46.138-86.951z"
          fill="url(#home__Gradient_bez_nazwy_25-38)"
        />
        <g className="home__cls-41">
          <path
            d="M267.895 368.83s-5.19 12.84-9.932 20.959 32.469 35.73 32.469 35.73l14.582-.163z"
            fill="url(#home__linear-gradient)"
          />
          <path
            d="M291.298 414.988s-4.716 4.074-14.82-6.02-18.515-19.18-18.515-19.18-10.97 11.625-1.556 20.105 25.395 18.379 21.411 24.37-14.666 7.132-22.92-6.853-10.732-15.038-10.732-15.038l-2.772 7.999s-5.423 23.776 17.893 36.603 59.998 16.275 59.998 16.275l1.51-19.322z"
            fill="url(#home__linear-gradient-2)"
          />
          <path
            d="M317.577 464.319s-18.005.36-41.81-8.934-34.461-23.349-34.373-35.014c0 0-15.867 28.93 5.84 44.247s48.105 9.991 56.056 13.91 18.523 14.836 7.26 18.91-25.585 3.888-50.773-11.878-25.471-21.165-25.153-13.285 1.085 21.017 3.157 25.781 15.314 16.556 40.342 16.65 54.947.612 69.147 7.799 7.98-19.235 7.98-19.235z"
            fill="url(#home__linear-gradient-3)"
          />
          <path
            d="M351.55 512.673l19.484 28.775-41.752 16.024-35.338 9.573-46.325-20.286s-12.46-20.331-.71-19.634 26.834 6.37 39.825 12.644 48.794-7.041 32.219-17.116-26.606-5.106-42.582-4.906-32.92-2.65-38.59-19.69c0 0 12.544 12.279 27.69 12.815s67.732-7.675 86.08 1.801z"
            fill="url(#home__linear-gradient-4)"
          />
          <path
            d="M371.704 539.611s15.038 15.463 19.752 18.986-18.162 43.877-33.468 51.132-31.079 11.156-44.807 4.052-46.433-37.828-39.87-35.322 34.578 7.313 55.784 5.609 40.358-24.877 26.216-26.019-24.228 6.786-40.619 12.949-50.332 3.422-67.073-24.239c0 0 34.066 15.93 53.446 13.392s48.59-26.02 70.639-20.54z"
            fill="url(#home__linear-gradient-5)"
          />
          <path
            d="M419.712 578.244s-10.373-6.129-28.256-19.647c0 0-11.664 29.145-33.52 41.816a105.831 105.831 0 01-44.755 13.368s34 22.155 51.113 8.9 16.647-27.796 18.358-19.954.667 19.33 9.969 11.355 17.038-33.728 27.09-35.838z"
            fill="url(#home__linear-gradient-6)"
          />
          <path
            d="M267.895 368.83s23.724 57.404 30.513 65.265 12.342-25.23 12.489-25.664-3.71-31.906-3.998-32.488-9.568-17.419-19.62-14.468c0 0-3.39-1.29 2.764 5.727s10.273 30.139 3.232 23.725-2.6-6.514-6.517-14.567-18.293-12.373-18.863-7.53z"
            fill="url(#home__linear-gradient-7)"
          />
          <path
            d="M298.408 434.095s21.805 38.808 30.553 48.991.087-24.557 4.461-30.344 14.535-52.673 14.535-52.673-9.849-27.635-10.108-28.013-7.434-6.529-12.365-6.983-8.178-1.453-9.488-.442 17.385 14.779 9.838 30.537-10.948-5.73-11.287-15.627-11.305-18.73-16.73-19.013a41.817 41.817 0 00-10.538.947s16.824 1.805 17.8 20.004 4.69 41.196-6.67 52.616z"
            fill="url(#home__linear-gradient-8)"
          />
          <path
            d="M356.012 518.382s-23.162-29.513-29.395-38.59 4.29-26.85 10.02-46.942 11.094-41.865 2.285-53.071-13.438-14.706-13.438-14.706 20.457.368 30.164 19.528 5.419 40.474-6.128 55.027-7.147 32.794 5.922 29.941 23.277-31.514 13.23-60.571-15.938-36.422-15.938-36.422l12.745 5.997 26.043 19.687s1.533 54.998-1.323 58.295-34.187 61.827-34.187 61.827z"
            fill="url(#home__linear-gradient-9)"
          />
          <path
            d="M353.44 515.529s13.945 26.547 28.478 35.714 41.25-64.673 41.25-64.673 23.347-27.277 9.518-53.737-23.918-28.994-23.918-28.994S417 413.882 416 440.228s-38.122 81.952-39.2 60.038 21.297-37.558 25.067-52.17 4.563-40.203-3.003-49.924-33.386-19.599-33.386-19.599 23.466 18.284 24.502 43.622-21.064 52.649-32.393 71.004-4.148 22.33-4.148 22.33z"
            fill="url(#home__linear-gradient-10)"
          />
          <path
            d="M381.918 551.243s14.52 12.795 19.412 15.948 10.878-14.15 20.56-19.017 25.263-22.465 25.263-22.465a15.109 15.109 0 013.414-6.013c2.398-2.314 9.76-5.513 13.275-9.711s7.159-25.817-.053-44.91-15.288-24.289-15.288-24.289 6.099 14.069 3.927 28.25-7.524 24.871-13.477 26.01-1.536-8.074-.069-12.421 10.254-40.995-4.249-58.142-25.865-20.644-25.865-20.644 25.102 15.156 21.05 50.835-41.058 90.646-47.9 96.57z"
            fill="url(#home__linear-gradient-11)"
          />
          <path
            d="M419.712 578.244s-12.598-9.682-.272-11.55 22.225-6.664 33.165-21.858 10.193-18.486 3.256-17.455-9.843.199-8.708-1.672-38.254 19.92-45.823 41.482c0 0 12.207 12.003 18.382 11.053z"
            fill="url(#home__linear-gradient-12)"
          />
          <path
            d="M267.895 368.83c1.021 3.642 2.23 7.227 3.525 10.778l.968 2.664 1.027 2.643a155.949 155.949 0 002.108 5.262c1.416 3.504 2.965 6.952 4.501 10.404.763 1.728 1.605 3.42 2.403 5.133.823 1.7 1.586 3.43 2.459 5.106a425.5 425.5 0 0022.322 39.419c2.066 3.161 4.1 6.342 6.19 9.485l6.446 9.313c1.054 1.566 2.197 3.07 3.313 4.592l3.358 4.559q3.342 4.563 6.764 9.1c9.121 12.083 17.888 24.446 26.536 36.85 4.336 6.194 8.662 12.385 13.326 18.247a91.604 91.604 0 0015.674 15.808l2.231 1.669c.75.548 1.466 1.137 2.264 1.626l4.677 3.06c3.235 1.88 6.42 3.83 9.775 5.533 1.664.87 3.303 1.779 4.988 2.614l5.064 2.497 10.195 5.004c13.604 6.73 26.914 14.035 40.004 21.714 13.08 7.73 25.907 15.768 38.411 24.563l-3.084 4.216c-12.115-8.786-24.823-17.014-37.674-24.857-12.89-7.813-26.01-15.262-39.425-22.14l-10.1-5.14-5.074-2.592c-1.69-.868-3.346-1.818-5.02-2.723-3.367-1.773-6.61-3.817-9.883-5.786l-4.77-3.22c-.81-.513-1.55-1.136-2.317-1.714l-2.286-1.763a94.729 94.729 0 01-15.957-16.55c-4.667-6.043-8.92-12.325-13.168-18.581-8.472-12.534-17.03-24.977-25.962-37.17q-3.338-4.572-6.638-9.205l-3.304-4.622c-1.097-1.544-2.221-3.068-3.257-4.655l-6.33-9.435c-2.053-3.183-4.047-6.404-6.073-9.603a426.488 426.488 0 01-21.803-39.828c-.85-1.691-1.59-3.435-2.39-5.15-.774-1.726-1.593-3.432-2.332-5.175-1.489-3.479-2.99-6.952-4.357-10.481a156.162 156.162 0 01-2.034-5.297l-.99-2.66-.93-2.68c-1.245-3.571-2.403-7.176-3.371-10.831z"
            fill="url(#home__linear-gradient-13)"
          />
        </g>
        <g className="home__cls-41">
          <path
            d="M880.206 453.365a141.42 141.42 0 005.745 15.403c2.862 6.016-25.352 23.519-25.352 23.519l-10.366-.925z"
            fill="url(#home__linear-gradient-14)"
          />
          <path
            d="M860.645 484.776s3.1 3.148 10.924-3.444 14.382-12.564 14.382-12.564 7.072 8.846-.16 14.334-19.226 11.614-16.77 16.082 9.986 5.867 16.74-3.585 8.583-10.062 8.583-10.062l1.469 5.822a24.531 24.531 0 01-15.038 24.947c-17.397 7.796-43.713 8.204-43.713 8.204l.144-13.776z"
            fill="url(#home__linear-gradient-15)"
          />
          <path
            d="M838.84 518.276s12.788 1.254 30.31-4.01 25.99-14.635 26.663-22.907c0 0 9.466 21.383-6.943 31.033s-34.856 4.41-40.76 6.746-14.114 9.486-6.357 12.998 17.958 4.175 36.872-5.6 19.456-13.585 18.733-8.018-2.096 14.833-3.87 18.094-11.94 10.883-29.753 9.561-39.132-2.616-49.688 1.69-4.465-14.075-4.465-14.075z"
            fill="url(#home__linear-gradient-16)"
          />
          <path
            d="M811.621 550.658l-15.676 19.31 28.696 13.672 24.54 8.745 34.238-11.805s10.146-13.717 1.742-13.875-19.493 3.025-29.132 6.75-34.272-7.697-21.844-13.916 19.251-2.143 30.605-1.114 23.59-.051 28.698-11.813c0 0-9.7 8.006-20.51 7.546s-47.706-9.198-61.357-3.5z"
            fill="url(#home__linear-gradient-17)"
          />
          <path
            d="M795.584 568.63s-11.673 10.123-15.25 12.358 10.158 32.1 20.59 38.091 21.41 9.63 31.624 5.359 35.42-24.231 30.593-22.82-25.063 3.264-40.042.88-27.147-19.869-17.013-19.893 16.81 6.153 28.083 11.43 35.596 5.218 49.25-13.455c0 0-25.242 9.399-38.87 6.524s-32.932-21.135-48.965-18.475z"
            fill="url(#home__linear-gradient-18)"
          />
          <path
            d="M758.993 593.343a245.135 245.135 0 0021.342-12.355s6.462 21.3 21.213 31.493a75.108 75.108 0 0031 11.957s-25.586 13.813-36.927 3.47-10.092-20.621-11.803-15.16-1.693 13.662-7.809 7.495-9.996-24.847-17.016-26.9z"
            fill="url(#home__linear-gradient-19)"
          />
          <path
            d="M880.206 453.365s-20.497 39.363-25.823 44.557-7.191-18.564-7.268-18.88 4.65-22.405 4.891-22.801 7.906-11.813 14.872-9.164c0 0 2.493-.726-2.328 3.905s-9.209 20.788-3.795 16.633 2.261-4.471 5.555-9.96 13.795-7.754 13.896-4.29z"
            fill="url(#home__linear-gradient-20)"
          />
          <path
            d="M854.383 497.922s-17.96 26.292-24.825 33.022 1.486-17.407-1.262-21.751-7.022-38.134-7.022-38.134 8.749-19.037 8.957-19.29 5.7-4.214 9.238-4.262 5.91-.576 6.778.213-13.3 9.508-8.924 21.094 8.15-3.453 9.016-10.447 9.223-12.647 13.101-12.546a29.831 29.831 0 017.438 1.256s-12.084.345-13.925 13.188-5.934 28.934 1.43 37.657z"
            fill="url(#home__linear-gradient-21)"
          />
          <path
            d="M808.087 554.456s18.339-19.63 23.346-25.717-1.36-19.264-4.17-33.82-5.256-30.285 1.718-37.737 10.488-9.675 10.488-9.675-14.579-.875-22.692 12.165a36.254 36.254 0 00.892 39.335c7.298 10.953 3.018 23.636-6.1 20.89s-14.576-23.625-5.597-43.66 13.636-24.925 13.636-24.925l-9.446 3.542-19.77 12.506s-4.557 38.89-2.732 41.385 20.427 45.71 20.427 45.71z"
            fill="url(#home__linear-gradient-22)"
          />
          <path
            d="M810.096 552.576s-11.594 18.04-22.512 23.73-25.273-48.12-25.273-48.12-14.892-20.626-3.385-38.61 18.844-19.22 18.844-19.22-6.49 6.661-7.44 25.387 21.96 60.19 24.108 44.721-12.786-27.797-14.548-38.36-.713-28.745 5.283-35.214 24.989-12.036 24.989-12.036-17.848 11.655-20.182 29.554 11.67 38.478 18.573 52.114 1.543 16.054 1.543 16.054z"
            fill="url(#home__linear-gradient-23)"
          />
          <path
            d="M787.584 576.306s-11.137 8.26-14.816 10.223-6.848-10.63-13.43-14.617-16.558-17.321-16.558-17.321a10.597 10.597 0 00-2.05-4.45c-1.56-1.774-6.597-4.45-8.833-7.62s-3.467-18.692 2.867-31.822 12.409-16.364 12.409-16.364-5.226 9.631-4.575 19.802 3.786 18.042 7.95 19.179 1.602-5.636.832-8.798-4.713-29.62 6.687-40.967 19.703-13.194 19.703-13.194-18.815 9.347-18.18 34.856 23.5 66.515 27.994 71.093z"
            fill="url(#home__linear-gradient-24)"
          />
          <path
            d="M758.993 593.343s9.573-6.163.921-8.17-15.393-5.956-22.219-17.33-6.087-13.666-1.216-12.55 6.99.686 6.3-.702 25.963 16.239 29.989 31.938c0 0-9.442 7.83-13.775 6.814z"
            fill="url(#home__linear-gradient-25)"
          />
          <path
            d="M880.206 453.365c-.956 2.523-2.042 4.997-3.187 7.442l-.857 1.834-.897 1.816a112 112 0 01-1.832 3.612c-1.228 2.404-2.548 4.762-3.858 7.123-.652 1.182-1.358 2.335-2.034 3.504-.692 1.16-1.344 2.342-2.07 3.482a306.728 306.728 0 01-18.367 26.696c-1.669 2.125-3.316 4.267-5.002 6.378l-5.173 6.242c-.848 1.051-1.756 2.054-2.646 3.07l-2.677 3.045q-2.665 3.048-5.386 6.074c-7.25 8.055-14.267 16.33-21.202 24.641-3.475 4.149-6.943 8.295-10.631 12.19a66.335 66.335 0 01-12.148 10.333l-1.692 1.06c-.568.346-1.115.724-1.713 1.026l-3.52 1.909c-2.42 1.153-4.81 2.358-7.304 3.38-1.24.523-2.462 1.076-3.714 1.575l-3.76 1.488-7.57 2.98c-10.102 4.014-20.032 8.453-29.83 13.169-9.793 4.751-19.426 9.736-28.877 15.275l1.929 3.159c9.173-5.554 18.734-10.68 28.371-15.525 9.663-4.821 19.467-9.373 29.446-13.502l7.509-3.082 3.774-1.556c1.257-.521 2.495-1.102 3.743-1.65 2.507-1.07 4.944-2.339 7.396-3.553l3.597-2.016c.608-.32 1.174-.72 1.756-1.087l1.738-1.122a68.588 68.588 0 0012.396-10.844c3.702-4.023 7.123-8.238 10.54-12.436 6.818-8.412 13.69-16.755 20.813-24.9q2.664-3.055 5.303-6.155l2.643-3.092c.878-1.033 1.773-2.051 2.61-3.118l5.1-6.335c1.66-2.142 3.282-4.313 4.925-6.468a307.33 307.33 0 0018.022-27.015c.712-1.15 1.348-2.346 2.025-3.516.66-1.18 1.35-2.344 1.985-3.538 1.279-2.383 2.565-4.761 3.76-7.186.62-1.201 1.206-2.419 1.782-3.641l.872-1.83.83-1.847c1.111-2.462 2.162-4.952 3.082-7.489z"
            fill="url(#home__linear-gradient-26)"
          />
        </g>
      </g>
      <g id="home__notepad">
        <rect
          className="home__cls-68"
          x={327.93}
          y={112.803}
          width={468.072}
          height={610.664}
          rx={23.535}
          ry={23.535}
        />
        <rect
          className="home__cls-69"
          x={350.002}
          y={139.803}
          width={423.928}
          height={564}
          rx={12.551}
          ry={12.551}
        />
        <rect
          x={364.062}
          y={147.803}
          width={395.808}
          height={541}
          rx={3.053}
          ry={3.053}
          fill="#fff"
        />
        <rect
          className="home__cls-71"
          x={470.597}
          y={108.919}
          width={182.333}
          height={52.602}
          rx={7.019}
          ry={7.019}
        />
        <path
          className="home__cls-72"
          d="M610.301 233.803H734.68v37.75H610.301zM610.301 279.053H734.68v7.987H610.301zM499.777 341.816h124.379v7.987H499.777zM543.93 600.316h80.225v7.987H543.93zM655.455 600.316h80.225v7.987h-80.225zM655.455 615.566h80.225v7.987h-80.225zM388.252 374.256H735.68v8.163H388.252zM388.252 391.006H735.68v8.163H388.252zM388.252 407.756H735.68v8.163H388.252zM388.252 424.506H735.68v8.163H388.252zM388.252 441.256H735.68v8.163H388.252zM388.252 458.006H735.68v8.163H388.252zM388.252 474.756H735.68v8.163H388.252zM388.252 491.506H735.68v8.163H388.252zM388.252 508.256H735.68v8.163H388.252zM388.252 525.006H735.68v8.163H388.252zM388.252 541.756H735.68v8.163H388.252z"
        />
      </g>
      <g id="home__person_left">
        <ellipse
          className="home__cls-73"
          cx={896.729}
          cy={765.229}
          rx={147.869}
          ry={24.241}
        />
        <g id="home__image_arm">
          <path
            className="home__cls-74"
            d="M711.439 351.694s10.15-2.534 14.659-1.695 6.828 10.169 9.56 13.328c.304.352 2.06 1.848 2.183 2.321.973 3.781-4.818 9.73-4.818 9.73l-14.832-5.071z"
          />
          <path
            className="home__cls-75"
            d="M732.048 244.475a47.25 47.25 0 10-33.457 61.792l23.491 65.957a5 5 0 109.42-3.355l-23.49-65.957a47.254 47.254 0 0024.036-58.437zm-31.678 51.886a38.25 38.25 0 1123.2-48.866 38.25 38.25 0 01-23.2 48.866z"
          />
          <path
            className="home__cls-74"
            d="M721.542 371.564c-12.15 1.815-12.556-13.579-12.933-15.572s.26-6.28 6.342-6.387 9.561 7.657 8.92 11.97a8.939 8.939 0 01-3.697 6.162z"
          />
          <circle
            cx={687.537}
            cy={260.328}
            r={38.25}
            transform="rotate(-19.604 687.537 260.328)"
            opacity={0.2}
            fill="url(#home__Gradient_bez_nazwy_22)"
          />
          <path
            className="home__cls-77"
            d="M737.744 382.625s54.625 42.106 63.14 44.419 23.157-10.348 27.342-15.142 47.766-34.223 43.502-52.186-19.447-19.52-23.101-15.408-38.931 50.45-41.336 50.662-69.688-31.9-69.688-31.9-2.836 10.881-7.666 12.287z"
          />
        </g>
        <path
          className="home__cls-77"
          d="M851.266 523.01s-23.697 1.055-28.624-2.464c0 0 11.966-137.02 19.474-161.421s26.63-38.068 35.252-42.584 17.538 8.876 17.538 8.876z"
        />
        <path
          className="home__cls-78"
          d="M832.005 768.387l45.375-.311s3.18-.398 3.339-3.18.556-18.6.556-18.6l-17.885-3.021s-.875 6.12-10.016 11.764c-8.803 5.435-21.661 3.13-22.388 12.251a1.02 1.02 0 001.02 1.097zM956.474 767.837s-.874-4.849 1.829-5.405 9.896-2.464 10.85-8.128.775-24.742.775-24.742l11.805-7.094s6.916 4.65 10.016 8.585 5.425 7.452 3.338 10.97-8.644 10.075-9.519 13.89-4.928 11.845-10.413 11.924-18.68 0-18.68 0z"
        />
        <path
          className="home__cls-68"
          d="M883.66 748.163s-17.647 3.22-23.847-4.889c-5.712-7.468-17.914-217.475-19.811-250.562-.016-.27.021-.57.024-.817a8.832 8.832 0 01.699-3.665l85.781-9.583s4.85 39.269 3.18 48.57 10.254 40.063 22.655 58.187 29.173 75.954 35.533 137.064c0 0-4.89 9.598-19.555 10.194L903.93 615.213s-11.446 106.599-20.27 132.95z"
        />
        <path
          className="home__cls-71"
          d="M840.461 488.26a41.096 41.096 0 00-.261 8.786 13352.2 13352.2 0 003.89 64.42l56.485 82.859c2.057-17.028 3.355-29.112 3.355-29.112-9.076-10.967-41.738-93.994-54.878-127.913z"
        />
        <path
          className="home__cls-75"
          d="M1035.859 550.735l-3.163-37.71c-.626-7.465-7.647-12.852-15.617-12.04l-30.39 3.101-1.015-8.34a5.588 5.588 0 00-6.223-4.87l-19.276 2.348a5.588 5.588 0 00-4.871 6.223l.943 7.745-26.42 2.695a13.097 13.097 0 00-11.833 13.968l2.96 35.303a13.097 13.097 0 0013.995 11.803l87.515-5.755c7.994-.525 14.02-7.006 13.395-14.47zm-77.382-50.216a4.54 4.54 0 013.957-5.056l15.361-1.871a4.54 4.54 0 015.056 3.957l.834 6.844-24.432 2.492z"
        />
        <path
          className="home__cls-69"
          d="M840.002 496.298s22.057 1.959 38.48-.153 28.86-178.236 28.86-178.236-28.468 6.882-34.021 3.129c0 0-22.485 14.893-27.803 53.684s-5.516 121.576-5.516 121.576z"
        />
        <path
          className="home__cls-74"
          d="M972.42 472.917s1.486 6.335 1.956 7.9 2.972 2.033 2.19 16.11c0 0-1.877 3.441-8.056 2.894 0 0-7.156.313-6.687-8.486s-.176-11.496-.704-12.904zM873.248 300.502c1.907 9.3-.796 22.593-.796 22.593s22.973 4.55 33.386-8.724c0 0-7.87-12.56-8.267-19.794 0 0 4.213-2.782 4.332-16.375s2.902-26.63-10.77-26.789-26.352 1.888-27.624 5.863-2.425 22.834-1.47 29.83 1.172 11.545 4.63 12.26 6.579 1.136 6.579 1.136z"
        />
        <path
          className="home__cls-79"
          d="M873.93 309.624a30.082 30.082 0 0018.73-10.89s-10.134 2.57-19.396 1.792a54.285 54.285 0 01.667 9.098z"
        />
        <path
          d="M876.446 260.525a23.163 23.163 0 00-9.688 2.355c-5.515 2.534-10.373 2.504-11.864.745s-5.733-12.927 2.613-19.048 33.864-5.644 41.018-4.451c4.77.795 8.33 2.633 9.221 5.405.358 1.113 2.763 1.3 3.458 2.583 2.822 5.207-.16 30.684-8.625 38.236 0 0-1.749 2.067-4.014-.954s.954-13.514-1.968-14.229-4.292 3.518-7.571 2.564c-1.13-.329-3.816-15.8-12.58-13.206z"
          fill="#2d3a64"
        />
        <path
          className="home__cls-75"
          d="M859.947 526.568s68.51 6.256 78.208-18.144l-6.647-98.62s23.697 50.756 24.322 68.431c0 0 15.798 2.503 19.552-3.44 0 0-1.877-43.406-17.831-78.13s-42.31-83.37-50.366-83.996-34.802 27.686-40.433 44.461c-1.197 3.564-7.23 20.608-8.056 33.669-3.06 48.425 1.251 135.769 1.251 135.769z"
        />
        <path
          className="home__cls-77"
          d="M886.822 349.147l18.821-36.302c-9.47 2.367-33.578 28.456-38.892 44.285-1.196 3.564-7.23 20.608-8.055 33.669-.652 10.317-.968 22.403-1.064 35.033.03-.092 17.144-52.18 21.127-62.23a3.947 3.947 0 00.075-2.72l-3.05-9.03 8.66-1.054a3.1 3.1 0 002.378-1.651zM926.983 560.4l-3.124-37.254a13.698 13.698 0 017.916-13.458l-1.947.199a13.097 13.097 0 00-11.834 13.968l2.96 35.303a13.07 13.07 0 0012.81 11.822 13.574 13.574 0 01-6.78-10.58z"
        />
        <path
          d="M680.62 250.384a16.223 16.223 0 01-3.48-4.06 8.164 8.164 0 01-1.04-4 8.459 8.459 0 013.048-6.41 11.22 11.22 0 017.866-2.78 10.997 10.997 0 017.242 2.275q2.751 2.275 2.751 4.922a3.631 3.631 0 01-.967 2.617 3.506 3.506 0 01-4.832.09 3.004 3.004 0 01-.922-2.201 7.53 7.53 0 01.178-1.442 7.53 7.53 0 00.178-1.443 2.564 2.564 0 00-.936-2.007 4.07 4.07 0 00-2.751-.818 5.322 5.322 0 00-3.748 1.398 4.097 4.097 0 00-1.516 3.033 5.556 5.556 0 001.219 3.48q1.19 1.606 5.62 4.401 10.707 6.632 10.707 13.294a8.798 8.798 0 01-1.427 4.863 17.967 17.967 0 01-4.967 4.654 18.112 18.112 0 013.554 4.357 8.645 8.645 0 01.937 4 8.305 8.305 0 01-1.279 4.506 8.73 8.73 0 01-3.807 3.227 13.545 13.545 0 01-5.829 1.19q-4.699 0-7.227-2.172a6.45 6.45 0 01-2.528-4.996 3.58 3.58 0 011.012-2.573 3.321 3.321 0 012.498-1.055 3.278 3.278 0 012.394.951 2.908 2.908 0 01.967 2.112 5.488 5.488 0 01-.372 1.74 5.488 5.488 0 00-.372 1.74 1.906 1.906 0 00.892 1.487 4.542 4.542 0 002.766.684 5.916 5.916 0 004.06-1.28 3.9 3.9 0 001.442-3.003 5.35 5.35 0 00-.981-3.301 21.675 21.675 0 00-5.651-4.372 34.804 34.804 0 01-8.536-7.048 9.3 9.3 0 01-2.527-5.86 9.593 9.593 0 011.427-4.98 21.066 21.066 0 014.937-5.22zm1.606 1.308q-2.825 2.439-2.825 5.145a5.915 5.915 0 00.862 2.96 12.072 12.072 0 002.915 3.167l8.149 6.067a10.71 10.71 0 002.23-2.692 5.194 5.194 0 00-.03-5.1 12.76 12.76 0 00-3.271-3.599q-1.041-.832-8.03-5.948z"
          fill="#898989"
        />
      </g>
      <path
        className="home__cls-73"
        d="M78.08 761.348a8.765 8.765 0 006.6-4.462c1.027-1.888 1.042-6.5 3.667-9.158 11.588-11.735 132.263-7.609 197.263-6.609s220 18 174 33.5-245.167 21-325.5 18.667-90-12.292-85.808-21.239c3.512-7.495 14.369-8.724 24.83-10.135 1.551-.21 3.287-.349 4.948-.564z"
        id="home__person_right"
      />
      <path
        className="home__cls-74"
        d="M163.323 749.416s-.918 11.02 5.51 12.857 10.101-5.51 10.101-5.51l.919-7.347s-.919-5.51-1.837-16.53a137.37 137.37 0 010-21.12H159.65s6.428 28.467 3.673 37.65zM313.928 755.845s-26.632-33.978-29.387-41.325h-18.366s8.265 14.693 15.611 22.04 22.958 21.121 22.958 21.121z"
      />
      <path
        className="home__cls-82"
        d="M180.924 715.974H158.35s-27.32-155.885-27.167-191.24 102.852-13.622 102.852-13.622l5.51 7.347s30.763 171.573 48.824 197.515c0 0-23.8 1.99-26.02.842 0 0-36.948-50.416-48.288-90.684-11.25-39.947-27.09-62.446-27.09-62.446s-3.253 148.462-6.046 152.288z"
      />
      <path
        d="M130.263 377.496s-14.693-23.876-6.428-39.488 24.795-8.264 23.877-33.977 8.264-41.325 14.693-46.835 19.284-1.837 21.121-1.837 12.857-2.755 18.367 5.51 6.243 6.575 9.183 10.102c4.591 5.51.918 22.958.918 25.713s2.755 34.896-6.428 37.651z"
        fill="#aa453d"
      />
      <path
        d="M211.994 296.684c0-.081.004-.177.01-.283a20.903 20.903 0 01-2.418-3.325c-2.418-4.003-19.292 27.72-19.292 27.72v16.088l5.782 2.89 9.49-5.439c9.183-2.755 6.428-34.896 6.428-37.651z"
        fill="#722d2b"
      />
      <path
        className="home__cls-85"
        d="M163.304 748.996s5.127 5.012 10.293 3.864 5.87-3.29 6.256-3.687c0 0 1.337 11.77.639 14.937-.587 2.659-12.254 2.93-16.478 1.023a2.213 2.213 0 01-1.264-1.915c-.17-3.16-.546-12.18.554-14.222zM321.805 764.575a.377.377 0 00.34-.54c-1.05-2.187-5.31-10.391-10.389-10.981-5.864-.682-8.561-1.284-15.965-9.262s-16.328-12.513-17.763-11.48-4.047 4.898-1.1 14.235 5.04 16.807 4.696 18.682h4.324l-.048-18.108a5.596 5.596 0 015.567 2.908c1.42 2.585 5.666 9.473 7.76 12.85a4.01 4.01 0 003.454 1.897z"
      />
      <path
        className="home__cls-86"
        d="M144.612 536.825c7.002-9.872 15.153-15.382 13.545-21.007-.852-2.984-6.261-6.162-11.786-7.82-9.117 2.989-15.152 8.192-15.19 16.736-.152 35.355 27.168 191.24 27.168 191.24h9.221s-13.277-61.298-16.644-79.358-13.316-89.919-6.314-99.791z"
      />
      <path
        className="home__cls-74"
        d="M234.034 452.799s21.121 35.814 22.04 38.57 0 6.427 2.755 9.182 1.836 3.674 2.755 4.592 2.755-1.837.918-6.428c0 0 7.346.918 7.346 7.346s2.755 8.265 3.674 8.265 2.755-11.02.918-16.53c-.65-1.948-5.51-7.346-10.102-9.183s-14.693-40.406-14.693-40.406z"
      />
      <path
        className="home__cls-86"
        d="M262.349 716.816c.974.504 6.11.403 11.565.131s-20.71-32.387-25.072-40.193-23.685-53.76-27.512-73.657-31.95-77.177-31.95-77.177l-2.41 37.766s15.84 22.499 27.09 62.446c11.34 40.268 48.289 90.684 48.289 90.684z"
      />
      <path
        className="home__cls-82"
        d="M252.247 448.207s-6.658-10.637-7.576-21.198-7.997-70.175-12.589-77.407-24.488-20.318-44.5-20.777c0 0-23.876.536-34.437 5.204s-21.351 10.56-22.422 34.437-2.067 42.549 3.673 65.392c0 0 2.86.51 7.466.916l-.464 1.38-27.205 82.993s66.126 27.55 129.142-2.755l-6.912-61.01c3.215-.676 12.154-2.882 15.824-7.175z"
      />
      <path
        className="home__cls-69"
        d="M174.185 328.714l1.076.111s2.755 6.428 11.938 6.428 11.02-4.39 11.02-4.39l1.837 3.472s15.611 36.733 15.611 44.08 1.837 96.423 1.837 96.423-31.223 3.674-38.57 2.755c0 0 12.857-82.649 12.857-92.75 0-8.896-15.253-44.608-18.993-53.233-.374-.864.446-2.896 1.387-2.896z"
      />
      <path
        fill="#a24c4b"
        d="M199.247 404.342l47.601 17.036 8.234 1.163-6.289-4.78-48.186-17.051-1.36 3.632z"
      />
      <path
        className="home__cls-74"
        d="M172.334 413.54s37.823-.23 43.333-2.984 9.184-7.347 16.53-4.592 10.102 7.347 11.02 9.183-3.673.919-8.265.919-6.428 2.755-11.02 3.673-2.755-.918-9.183.918-22.04 9.484-43.161 11.32l1.28-4.844a21.41 21.41 0 00.246-9.91zM172.506 295.766v10.101a3.262 3.262 0 001.837 2.755v20.839a7.75 7.75 0 005.436 7.38 28.17 28.17 0 0011.094 1.167c10.101-.918 7.346-6.428 7.346-6.428v-11.938s8.265.918 10.102-7.347a100.04 100.04 0 001.836-18.366 16.77 16.77 0 01-2.755-11.938s-1.836-8.265-6.428-9.183c0 0-9.183 23.876-28.468 22.958z"
      />
      <path
        className="home__cls-79"
        d="M198.22 327.103s-13.89.861-19.4-12.627c0 0 12.454 7.462 19.4 5.855z"
      />
      <path
        className="home__cls-86"
        d="M129.73 471.752s22-7.245 35.315-36.746a147.328 147.328 0 01-23.183-.232zM170.746 413.426s-11.785-.421-15.917-3.712c0 0 6.81-25.866 6.81-29.54s10.025 17.029 9.107 33.252z"
      />
    </StyledImage>
  )
}

export default HomeImage
