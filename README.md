# VYPS Kit
Contains our latest widget and demo source code. 

## How to use the widget
1. Install with `npm install @reputation.link/vyps-kit`
2. Import and use! 
  ```jsx
  import { SecurityWidget } from '@reputation.link/vyps-kit'
  
  const MyComponent = (props) => {
    <SecurityWidget
      url={'https://reputation.link/protocols/tracer'}
      left // Place left - right is default
      color={"#3E58C9"} // Background
      textColor={"#ffffff"} // Text and icon colour
      inset={[40, 40]} // Coordinate offset from corner 
    />
  }
  ```
