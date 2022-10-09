export const TopFrame = (props) => {
  let ratio = 626 / 350;
  let size = props.size || props.width || 350;
  let width = size;
  let height = size * ratio;
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="28"
        width="338"
        height="598"
        rx="30"
        fill="url(#paint0_linear_221_877)"
      />
      <rect
        x="5"
        y="28"
        width="338"
        height="598"
        rx="30"
        fill="url(#paint1_linear_221_877)"
      />
      <rect
        x="5"
        y="28"
        width="338"
        height="598"
        rx="30"
        fill="url(#paint2_linear_221_877)"
      />
      <rect
        x="5"
        y="28"
        width="338"
        height="598"
        rx="30"
        fill="url(#paint3_linear_221_877)"
      />
      <g filter="url(#filter0_f_221_877)">
        <rect x="33" y="9" width="283" height="2" fill="#CBCBCB" />
      </g>
      <g filter="url(#filter1_f_221_877)">
        <rect
          x="29"
          y="606"
          width="294"
          height="2"
          fill="#CBCBCB"
          fill-opacity="0.2"
        />
      </g>
      <g filter="url(#filter2_f_221_877)">
        <rect x="12" y="322" width="326" height="5" fill="#353637" />
      </g>
      <rect
        x="12.7"
        y="35.7"
        width="324.6"
        height="572.6"
        rx="23.3"
        fill="url(#paint4_linear_221_877)"
      />
      <rect
        x="12.7"
        y="35.7"
        width="324.6"
        height="572.6"
        rx="23.3"
        stroke="#2E343D"
        stroke-width="1.4"
      />
      <rect
        x="12.7"
        y="35.7"
        width="324.6"
        height="572.6"
        rx="23.3"
        stroke="url(#paint5_linear_221_877)"
        stroke-opacity="0.2"
        stroke-width="1.4"
      />
      <rect
        x="12.65"
        y="35.65"
        width="324.7"
        height="506.7"
        rx="24.35"
        fill="#4A515C"
        stroke="#2E343D"
        stroke-width="1.3"
      />
      <rect x="23" y="56" width="302" height="471" rx="13" fill="#323A43" />
      <defs>
        <filter
          id="filter0_f_221_877"
          x="24"
          y="0"
          width="301"
          height="20"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="4.5"
            result="effect1_foregroundBlur_221_877"
          />
        </filter>
        <filter
          id="filter1_f_221_877"
          x="16"
          y="593"
          width="320"
          height="28"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="6.5"
            result="effect1_foregroundBlur_221_877"
          />
        </filter>
        <filter
          id="filter2_f_221_877"
          x="0"
          y="310"
          width="350"
          height="29"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="6"
            result="effect1_foregroundBlur_221_877"
          />
        </filter>
        <linearGradient
          id="paint0_linear_221_877"
          x1="174"
          y1="28"
          x2="174"
          y2="626"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#43484F" />
          <stop offset="1" stop-color="#4A4E57" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_221_877"
          x1="174"
          y1="28"
          x2="174"
          y2="626"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#535B66" />
          <stop offset="0.791667" stop-color="#717A84" />
          <stop offset="1" stop-color="#292C34" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_221_877"
          x1="174"
          y1="28"
          x2="174"
          y2="626"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#43484F" />
          <stop offset="1" stop-color="#4A4E57" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_221_877"
          x1="174"
          y1="28"
          x2="174"
          y2="626"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#535B66" />
          <stop offset="0.791667" stop-color="#717A84" />
          <stop offset="1" stop-color="#292C34" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_221_877"
          x1="175"
          y1="35"
          x2="175"
          y2="609"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4D555E" />
          <stop offset="1" stop-color="#2B323D" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_221_877"
          x1="34.5"
          y1="41.0421"
          x2="406.797"
          y2="860.817"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#212932" stop-opacity="0.55" />
          <stop offset="1" stop-opacity="0.65" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const BackFrame = (props) => {
  let ratio = 31 / 302;
  let size = props.size || props.width || 350;
  let width = size;
  let height = size * ratio;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 302 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="auto"
    >
      <mask id="path-1-inside-1_221_832" fill="white">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30 0C13.4315 0 0 13.4315 0 30V30.4963C3.67477 28.8907 7.73337 28 12 28H290C294.267 28 298.325 28.8907 302 30.4963V30C302 13.4315 288.569 0 272 0H30Z"
        />
      </mask>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30 0C13.4315 0 0 13.4315 0 30V30.4963C3.67477 28.8907 7.73337 28 12 28H290C294.267 28 298.325 28.8907 302 30.4963V30C302 13.4315 288.569 0 272 0H30Z"
        fill="#3F444B"
      />
      <path
        d="M0 30.4963H-1V32.0245L0.400372 31.4126L0 30.4963ZM302 30.4963L301.6 31.4126L303 32.0245V30.4963H302ZM1 30C1 13.9837 13.9837 1 30 1V-1C12.8792 -1 -1 12.8792 -1 30H1ZM1 30.4963V30H-1V30.4963H1ZM0.400372 31.4126C3.95126 29.8612 7.87375 29 12 29V27C7.593 27 3.39828 27.9202 -0.400372 29.5799L0.400372 31.4126ZM12 29H290V27H12V29ZM290 29C294.126 29 298.049 29.8612 301.6 31.4126L302.4 29.5799C298.602 27.9202 294.407 27 290 27V29ZM301 30V30.4963H303V30H301ZM272 1C288.016 1 301 13.9837 301 30H303C303 12.8792 289.121 -1 272 -1V1ZM30 1H272V-1H30V1Z"
        fill="#2C3A3A"
        mask="url(#path-1-inside-1_221_832)"
      />
    </svg>
  );
};
