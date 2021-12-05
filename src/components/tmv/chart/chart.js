import React from 'react';

function Chart({value, maxFairPrice, maxGreatPrice}) {
  return (
    <svg
      width="100%"
      viewBox="0 0 559 165"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Pricing chart"
      id="3581056817859121pricing-chart-svg"
      style={{maxWidth: '559px'}}
    >
      <defs>
        <linearGradient
          id="3581056817859121graph-gradient"
          x1="100%"
          y1="0%"
          x2="0"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" style={{stopColor: 'rgba(255, 130, 24, 0.4)'}}></stop>
          <stop offset="37%" style={{stopColor: 'rgba(0, 194, 118, 0.4)'}}></stop>
          <stop offset="68%" style={{stopColor: 'rgba(0, 152, 194, 0.4)'}}></stop>
          <stop offset="100%" style={{stopColor: 'rgba(0, 126, 229, 0.4)'}}></stop>
        </linearGradient>
        <filter id="3581056817859121arrow-shadow">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="1"
            floodColor="black"
            floodOpacity="0.5"
          ></feDropShadow>
        </filter>
      </defs>
      <line x1="-1%" y1="100" x2="101%" y2="100" stroke="#e6e6e6"></line>
      <g fill="url(#3581056817859121graph-gradient)">
        <g>
          <path
            width="27"
            height="4"
            x="0"
            y="4"
            d="M 0,100 h 27 v -4 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
        </g>
        <g>
          <path
            width="27"
            height="4"
            x="28"
            y="4"
            d="M 28,100 h 27 v -4 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
        </g>
        <g>
          <path
            width="27"
            height="12"
            x="56"
            y="12"
            d="M 56,100 h 27 v -12 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
        </g>
        <g>
          <path
            width="27"
            height="8"
            x="84"
            y="8"
            d="M 84,100 h 27 v -8 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
        </g>
        <g>
          <path
            width="27"
            height="32"
            x="112"
            y="32"
            d="M 112,100 h 27 v -32 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
        </g>
        <g>
          <path
            width="27"
            height="40"
            x="140"
            y="40"
            d="M 140,100 h 27 v -40 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
          <g>
            <line x1="140" y1="100" x2="140" y2="132" stroke="#cccccc"></line>
            <text
              fill="#555555"
              textAnchor="middle"
              dominantBaseline="middle"
              x="140"
              y="148"
              className="heading-6"
            >
              ${maxGreatPrice}
            </text>
          </g>
        </g>
        <g>
          <path
            width="27"
            height="26"
            x="168"
            y="26"
            d="M 168,100 h 27 v -26 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
        </g>
        <g>
          <path
            width="27"
            height="32"
            x="196"
            y="32"
            d="M 196,100 h 27 v -32 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
        </g>
        <g>
          <path
            width="27"
            height="48"
            x="224"
            y="48"
            d="M 224,100 h 27 v -48 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
        </g>
        <g>
          <path
            width="27"
            height="40"
            x="252"
            y="40"
            d="M 252,100 h 27 v -40 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
        </g>
        <g>
          <path
            width="27"
            height="18"
            x="280"
            y="18"
            d="M 280,100 h 27 v -18 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
        </g>
        <g>
          <path
            width="27"
            height="20"
            x="308"
            y="20"
            d="M 308,100 h 27 v -20 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
        </g>
        <g>
          <path
            width="27"
            height="14"
            x="336"
            y="14"
            d="M 336,100 h 27 v -14 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
        </g>
        <g>
          <path
            width="27"
            height="36"
            x="364"
            y="36"
            d="M 364,100 h 27 v -36 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
        </g>
        <g>
          <path
            width="27"
            height="40"
            x="392"
            y="40"
            d="M 392,100 h 27 v -40 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
          <g>
            <line x1="418" y1="100" x2="418" y2="132" stroke="#cccccc"></line>
            <text
              fill="#555555"
              textAnchor="middle"
              dominantBaseline="middle"
              x="418"
              y="148"
              className="heading-6"
            >
              ${maxFairPrice}
            </text>
          </g>
        </g>
        <g>
          <path
            width="27"
            height="16"
            x="420"
            y="16"
            d="M 420,100 h 27 v -16 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
        </g>
        <g>
          <path
            width="27"
            height="4"
            x="448"
            y="4"
            d="M 448,100 h 27 v -4 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
        </g>
        <g>
          <path
            width="27"
            height="32"
            x="476"
            y="32"
            d="M 476,100 h 27 v -32 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
        </g>
        <g>
          <path
            width="27"
            height="10"
            x="504"
            y="10"
            d="M 504,100 h 27 v -10 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
        </g>
        <g>
          <path
            width="27"
            height="4"
            x="532"
            y="4"
            d="M 532,100 h 27 v -4 a2,2 0 0 0 -2,-2 h -23 a2,2 0 0 0 -2,2 Z"
          ></path>
        </g>
      </g>
      {value === 'great' && (
        <g>
          <defs>
            <linearGradient id="3581056817859121gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(0, 126, 229)" stopOpacity="0"></stop>
              <stop offset="100%" stopColor="rgb(0, 126, 229)" stopOpacity="0.43"></stop>
            </linearGradient>
          </defs>
          <polygon points="0,100 0,0 140,0 140,100" fill="url(#3581056817859121gradient)"></polygon>
        </g>
      )}
      {value === 'fair' && (
        <g>
          <defs>
            <linearGradient id="4851490887972717gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(0, 201, 227)" stopOpacity="0"></stop>
              <stop offset="48%" stopColor="rgb(0, 176, 210)" stopOpacity="0.23"></stop>
              <stop offset="100%" stopColor="rgb(0, 152, 194)" stopOpacity="0.6"></stop>
            </linearGradient>
          </defs>
          <polygon
            points="140,100 140,0 420,0 420,100"
            fill="url(#4851490887972717gradient)"
          ></polygon>
        </g>
      )}
      {value === 'high' && (
        <g>
          <defs>
            <linearGradient id="4851490887972717gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(245, 148, 66)" stopOpacity="0"></stop>
              <stop offset="50%" stopColor="rgb(245, 148, 66)" stopOpacity="0.19"></stop>
              <stop offset="100%" stopColor="rgb(245, 148, 66)" stopOpacity="0.5"></stop>
            </linearGradient>
          </defs>
          <polygon
            points="420,100 420,0 588,0 588,100"
            fill="url(#4851490887972717gradient)"
          ></polygon>
        </g>
      )}
      <text
        fill="#555555"
        textAnchor="middle"
        dominantBaseline="middle"
        x="12.5%"
        y="120"
        className="medium text-lowercase"
      >
        Great
      </text>
      <text
        fill="#555555"
        textAnchor="middle"
        dominantBaseline="middle"
        x="50%"
        y="120"
        className="medium text-lowercase"
      >
        Fair
      </text>
      <text
        fill="#555555"
        textAnchor="middle"
        dominantBaseline="middle"
        x="87.5%"
        y="120"
        className="medium text-lowercase"
      >
        High
      </text>
    </svg>
  );
}

export default Chart;
