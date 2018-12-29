import React from 'react';

class Icon extends React.Component
{
  constructor(props) { super(props); }

  //Override
  render()
  {
    return (
      <svg id={this.props.id} className={this.props.className} style={this.props.style}
      xmlns="http://www.w3.org/2000/svg"
      width="24" height="24" viewBox="0 0 56 56">
        <path fill="#E9E9E0" d="M36.985,0H7.963C7.155,0,6.5,0.655,6.5,1.926V55c0,0.345,0.655,1,1.463,1h40.074 c0.808,0,1.463-0.655,1.463-1V12.978c0-0.696-0.093-0.92-0.257-1.085L37.607,0.257C37.442,0.093,37.218,0,36.985,0z"/>
        <path fill="#659C35" d="M48.037,56H7.963C7.155,56,6.5,55.345,6.5,54.537V39h43v15.537C49.5,55.345,48.845,56,48.037,56z"/>
        <polygon fill="#D9D7CA" points="37.5,0.151 37.5,12 49.349,12 	"/>
        <path fill="#FFFFFF" d="M17.385,53h-1.641V42.924h2.898c0.428,0,0.852,0.068,1.271,0.205 c0.419,0.137,0.795,0.342,1.128,0.615c0.333,0.273,0.602,0.604,0.807,0.991s0.308,0.822,0.308,1.306 c0,0.511-0.087,0.973-0.26,1.388c-0.173,0.415-0.415,0.764-0.725,1.046c-0.31,0.282-0.684,0.501-1.121,0.656 s-0.921,0.232-1.449,0.232h-1.217V53z M17.385,44.168v3.992h1.504c0.2,0,0.398-0.034,0.595-0.103 c0.196-0.068,0.376-0.18,0.54-0.335c0.164-0.155,0.296-0.371,0.396-0.649c0.1-0.278,0.15-0.622,0.15-1.032 c0-0.164-0.023-0.354-0.068-0.567c-0.046-0.214-0.139-0.419-0.28-0.615c-0.142-0.196-0.34-0.36-0.595-0.492 c-0.255-0.132-0.593-0.198-1.012-0.198H17.385z"/>
        <path fill="#FFFFFF" d="M31.316,42.924V53h-1.668l-3.951-6.945V53h-1.668V42.924h1.668l3.951,6.945v-6.945H31.316z"/>
        <path fill="#FFFFFF" d={"M41.16,47.805v3.896c-0.21,0.265-0.444,0.48-0.704,0.649s-0.533,0.308-0.82,0.417 S39.052,52.954,38.747,53c-0.306,0.046-0.608,0.068-0.909,0.068c-0.602,0-1.155-0.109-1.661-0.328s-0.948-0.542-1.326-0.971 c-0.378-0.429-0.675-0.966-0.889-1.613c-0.214-0.647-0.321-1.395-0.321-2.242s0.107-1.593,0.321-2.235 c0.214-0.643,0.51-1.178,0.889-1.606c0.378-0.429,0.822-0.754,1.333-0.978c0.51-0.224,1.062-0.335,1.654-0.335 c0.547,0,1.057,0.091,1.531,0.273c0.474,0.183,0.897,0.456,1.271,0.82l-1.135,1.012c-0.219-0.265-0.47-0.456-0.752-0.574 c-0.283-0.118-0.574-0.178-0.875-0.178c-0.337,0-0.659,0.063-0.964,0.191c-0.306,0.128-0.579,0.344-0.82,0.649 c-0.242,0.306-0.431,0.699-0.567,1.183s-0.21,1.075-0.219,1.777c0.009,0.684,0.08,1.276,0.212,1.777 c0.132,0.501,0.314,0.911,0.547,1.23s0.497,0.556,0.793,0.711c0.296,0.155,0.608,0.232,0.937,0.232c0.1,0,0.234-0.007,0.403-0.021 c0.168-0.014,0.337-0.036,0.506-0.068c0.168-0.032,0.33-0.075,0.485-0.13c0.155-0.055,0.269-0.132,0.342-0.232v-2.488h-1.709 v-1.121H41.16z"}/>
        <circle fill="#F3D55B" cx="18.931" cy="14.431" r="4.569"/>
        <polygon fill="#88C057" points="6.5,39 17.5,39 49.5,39 49.5,28 39.5,18.5 29,30 23.517,24.517 	"/>
      </svg>
    );
  }
}
export default Icon;
