/*
  NOTE: unaccepted JSX element attribute commented out; some replaced
  NOTE: JSX accepts attribute values inside {''}, however, the format below is still accepted
  It is better to follow the correct format...
  too many attr requires change right now, perhaps...
  if style attribute exists, an error will occur
  ? create a function to convert to valid JSX format using JSON.stringify() & JSON.parse()
*/
const Loading = () => (
  <svg
    width="100"
    height="100"
    version="1.1" id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    // xmlns:xlink="http://www.w3.org/1999/xlink"
    // xml:space="preserve"
    x="0px" y="0px"
    viewBox="0 0 100 100"
    // enable-background="new 0 0 100 100"
    enableBackground={"new 0 0 100 100"} // > proper format of attribute above
  >
  <rect fill="#fff" width="3" height="100" transform="translate(0) rotate(180 3 50)">
    <animate
        attributeName="height"
        attributeType="XML"
        dur="1s"
        values="30; 100; 30"
        repeatCount="indefinite"/>
  </rect>
  <rect x="17" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 20 50)">
    <animate
        attributeName="height"
        attributeType="XML"
        dur="1s"
        values="30; 100; 30"
        repeatCount="indefinite"
        begin="0.1s"/>
  </rect>
  <rect x="40" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 40 50)">
    <animate
        attributeName="height"
        attributeType="XML"
        dur="1s"
        values="30; 100; 30"
        repeatCount="indefinite"
        begin="0.3s"/>
  </rect>
  <rect x="60" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 58 50)">
    <animate
        attributeName="height"
        attributeType="XML"
        dur="1s"
        values="30; 100; 30"
        repeatCount="indefinite"
        begin="0.5s"/>
  </rect>
  <rect x="80" fill="#fff" width="3" height="100" transform="translate(0) rotate(180 76 50)">
    <animate
        attributeName="height"
        attributeType="XML"
        dur="1s"
        values="30; 100; 30"
        repeatCount="indefinite"
        begin="0.1s"/>
  </rect>
  </svg>
)

export default Loading