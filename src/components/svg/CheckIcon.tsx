

import React, { FC } from 'react'

const CheckIcon:FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg {...props} width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M86 118L64.5 96.5C62.6667 94.6667 60.3333 93.75 57.5 93.75C54.6667 93.75 52.3333 94.6667 50.5 96.5C48.6667 98.3333 47.75 100.667 47.75 103.5C47.75 106.333 48.6667 108.667 50.5 110.5L79 139C81 141 83.3333 142 86 142C88.6667 142 91 141 93 139L149.5 82.5C151.333 80.6667 152.25 78.3333 152.25 75.5C152.25 72.6667 151.333 70.3333 149.5 68.5C147.667 66.6667 145.333 65.75 142.5 65.75C139.667 65.75 137.333 66.6667 135.5 68.5L86 118ZM100 200C86.1667 200 73.1667 197.373 61 192.12C48.8333 186.867 38.25 179.743 29.25 170.75C20.25 161.75 13.1267 151.167 7.88 139C2.63333 126.833 0.00666667 113.833 0 100C0 86.1667 2.62667 73.1667 7.88 61C13.1333 48.8333 20.2567 38.25 29.25 29.25C38.25 20.25 48.8333 13.1267 61 7.88C73.1667 2.63333 86.1667 0.00666667 100 0C113.833 0 126.833 2.62667 139 7.88C151.167 13.1333 161.75 20.2567 170.75 29.25C179.75 38.25 186.877 48.8333 192.13 61C197.383 73.1667 200.007 86.1667 200 100C200 113.833 197.373 126.833 192.12 139C186.867 151.167 179.743 161.75 170.75 170.75C161.75 179.75 151.167 186.877 139 192.13C126.833 197.383 113.833 200.007 100 200Z" fill="currentColor"/>
    </svg>
  )
}

export default CheckIcon