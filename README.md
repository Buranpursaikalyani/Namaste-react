#React
We install parcel from bundler by using npm
Caret I updates to the new versions of dependencie and Tilde-instll the major version
package.json-will maintain the records of exact version of dependencies that we have installed.It is usefull for aprox version 
node modules-it is a database contain all the code of parcel(installed package) from dependencies and store in our system
Transitive dependencies-dependencies contains dependencies and so on
every dependency contains its own package.json and it has own dependencies 
node_modules are not required to push in Github If you have package.json and packagelock.json we can recreate the node modules by npm install in repository
What you can regenerate don't put it on git
To ignite our APP command----npx parcel index.html
just like we have npm--installing the package similarly we have npx -- means executing a package
cdn links are not prefered way to bring react into our app because we already have node modules to get react we does not need other network like unpkeg to get react app

# parcel
-Dev build
-Local server
-HMR=Hot Module Replacement(Automatically loading webpage)
-File Watching Algorithm-written in C++
-Caching -Faster Builds
-Image Optimization
-Minification
-Bundling (bundle the html css js files together)
-Compress
-Consistent Hashing
-Code Splitting
-Differential Bundling=App runs smoothly on any browsers and support older browsers
-Diagnostic gives clear error message
-Error Handling
-Https
-Tree Shaking-remove unused code
-Different dev and prod bundles

# when npx parcel build index.html generates error Remove main in package.json
# development are stored in dist folder
# cache builds are stored in parcel cache folder

# Scripts are used make shortcut command for execution
for example npx parcel index.html --->configured in package.json  "start":parcel index.html ---->npx run start

# React elements are equivalent to html dom elements
const heading =React.createElement("h1",{id:"heading"},"Hello Kalyani");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
It is not develper friendly and messy and not readable

So we use JSX -merge HTML and JS together
JSX is not html in Javascript
JSX is like html syntax or xml like syntax
# const jsxheading=<h1 id="heading">Hello kalyani</h1>;

# JSX transpiled before it reaches the JS and transpiled by PARCEL--->BABEL(compiles js code converts jsx into react)

# JSX =>Bable transpiles it to React.createElement=>ReactElement-JSObject=>HTMLElement(render)
# To give attributes in JSX we use camelCase

# EXTENSIONS INSTALLED
Bracket Pair Colorization Toggler
Prettier - Code formatter
ESLint
Better Comments

# React Component 2 types
Class Based Component
Functional Component-normal javascript function which returns some jsx code also function which returns react element

# Component Composition ---> Component inside component like nested component
import React from "react";
import ReactDOM from "react-dom"

const Title = () =>(
  <h1 className="Title" tabIndex={5}>
    Hi this is title component
    </h1>
);

const Heading = () =>(
  <div id="container">
  <h1 className="Heading">
    <Title/>
    <Title/>
    <Title></Title>
    {Title()}
    This is Heading Component</h1>
    </div>
)
 
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>)

# JSX also save from miscellanious attacks
JSX do

# JSX makes react readable.



#Ui layer data layer works simultaneously
efficient dom manupulation
faster dom maupulation

# React Hooks

hook-normal js utility function written by fb developers with logic written behind it.
useState() - super powerfull react variable
useEffect()
import from react
import {useState} from "react"
# whenever a state variable updates react will re render the component-- super powerfull variable/local hariable 

React is fast because efficient dom operation and maupulation because it has a virtual dom.

# React uses ReConciliation Algorithm-also known as React fibre
Reconciliation is the process by which React updates the UI to reflect changes in the component state. The reconciliation algorithm is the set of rules that React uses to determine how to update the UI in the most efficient way possible. React uses a virtual DOM (Document Object Model) to update the UI.

# virtual dom--representation of actual dom
The Virtual DOM is an abstract representation of the actual DOM in a React application. React uses the Virtual DOM to render the UI efficiently.
 whenever a change in state variable React automatically finds diference between actual dom and virtual dom and Finding out div and updating the UI

set function in usestate acts as a trigger to update the UI
# The reconciler does the work of computing which parts of a tree have changed
# the renderer then uses that information to actually update the rendered app.

ARRAY DESTRUCTURING
const arr=useState(resData);
const[listOfRestaurant,SetListofRestaurant]=arr;
const listOfRestaurant=arr[0]
const SetListofRestaurant=arr[1];

# Monolith and microservices Architecture
# Microservice Architecture follows
BE<-->UI<-->Auth<-->DB<-->SMS<-->EmailS
Different services run on their own specific port 
for example
localhost:1234-->UI to call service /
localhost:1000-->BE to call service /BE
localhost:3000-->API

For interaction of different services they call to their urls

Separation of Concern
Single Responsibility work


Approach 1-----> page loads---> swiiggy API call---->Render the data
Approach 2----->page loads---->Render----->API call---->Re-Render with new data

in react we will always use 2nd Approach beacuse it gives better UX no lag and react renders cycle is very fast

# useEffect Hook
-> It will take two arguments
1.Arrow function-call back function-this call back function called after component renders
2.dependency array

# CORS ERROR
install cors extension in browser and on the extension which bypass the CORS ISSUE

# Conditinal Rendering- Rendering on the basis of condition

Shimmer UI-we loads empty blank cards in fake cards page in every app untill real data is loaded for better user experience.All the new web apps are using this shimmer UI

# why do we need state variable
If we want our UI page should be dynamic we use local state variable
whenever state variabe changes  react will update the variable and re render the webpage whole component refresh quickly.
# how constant variable is updating in state variable 
whenever value is updating in set variable the component will re render the whole component it will create the new instance it will create the updated value 

# Whenever state variables update React triggers Re Conciliation cycle react re-renders the component

# useEffect hook
if no dependency array-It will render Every time my component render-basic nature
if the dependency array is empty-useEffect is called on only initial render and just once when the component is rendered for the first time
if the dependency array has something-Useeffect is called everytime the dependency array is upadated/changed
useEffect(()=>{
        const fetchMenu=async()=>{
            const data=await fetch(
                "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=179095&catalog_qa=undefined&submitAction=ENTER"
            );
            const json=await data.json();
        }
    },[])

# useState Hook
Always call useSate hook inside your component otherwise it will throw error.
It is used to create local state variables inside functional component
try to call hook on the top/higher level to avoid inconsistency
never create usestate inside if-else condtions /for loop /functionsit wll create inconsistency 

# Routing
react-router-dom is routing library
npm install react-router-dom
create routing configuration in app.js
createBrowserRouter-used to creates the routes for different pages in the form of list 
RouterProvider -provides routing configuration to our App
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
  },
  {
    path:"/about",
    element:<About/>,
  },
  {
    path:"/contact",
    element:<Contact/>,
  }
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)

# useRouteError hook provides detailed infoemation about the error
import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Oops!!!</h1>
            <h2>Something Went Wrong!!!</h2>
            <h3>{err.status} {err.statusText}</h3>
            
        </div>
    )
}

# Children Routes of App

outlet-- is filled with components that are passed as a children according to the route
outlet is replaced by the children component

const AppLayout = ()=>{
  return(
    <div className="app">
        <Header/>
       <Outlet/>

    </div>
  )
}
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
    {
      path:"/",
      element:<Body/>,
    },
    {
      path:"/about",
      element:<About/>,
    },
    {
      path:"/contact",
      element:<Contact/>,
    }
  ],
    errorElement:<Error/>,
  },
  
])

# Never use anchor tag to route to other page because the whole page got reload
# We can navigate to the new page without reloading the whole page through 
Link component---given by react-router-dom---it works exactly same as anchor tag---it refreshes the component.

# React is called SINGLE PAGE APPLICATION BECAUSE ONLY COMPONENTS ARE CHANGING EVERYTHING IS UNDER THE ONE PAGE VIA CLIENT SIDE ROUTING.

# There are Two types of Routing in web application
1. CLIENT SIDE ROUTING---> we won't make any network call It loads the data at the time of API call and fetches the whole components data it just loads that component when we call aboutus 
2. SERVER SIDE ROUTING ---> if we click on aboutus it re-loads the whole ,it sends the network call to aboutus html and fetches data from that html server and renders it on to the UI



# Dynamic Routing
# Graph QL
# useParams Hook

# Class Based Components
class which extend React.Component which has a render method which returns some JSX-converted 

# React.Component-is a class given by react user class is inheriting from it

# Exports and imports of class and funcional components are same.

# why do we write super props in class component
Alawys use this keyword to access the props

# State hook in class base componenet is a big object which holds all state variables.
this.state={
            count:0,
            count1:1
        }
# we use this.setState to update the hook in class component
<button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>count Increase</button>

# never update state varibales directly it creates inconsistency in program

# life cycle of React class based component
life cycle of React consists of two phases 
1.Render Phase-In this phase all the constructors and render methods of parent class and children class are called
Pure and has no side effects. May be paused, aborted or restarted by React.
2.commit phase -After the Render phase react Dom is updated and componentDidMount is called
Can work with DOM, run side effects, schedule updates.

If parent class contains one or more childrens it batched up all the childrens together and repeats the life cycle phases 
Example:Parent class Constuructor          
        Parent class Render Method
               child1 class Constuructor
               child1 class Render Method
               child2 class Constructor
               child2 class Render Method
               child3 class Constructor
               child3 class Render Method
                                         ---------Render Phase
               Child1 class componentDidMount
               Child2 class componentDidMount
               Child3 class componentDidMount
        Parent class componentDidMount    ---------Commit Phase

# componentDidMount is used to make API calls we will use this to quickly render the component 
Why React lifecycle works like that
# when React batch(childrens) the render  we are updating or dom manupulation is very expensive and time taking process commit phase takes time 
by this we get optimization

# Episode -9 Optimizing your app
If you divide your code in small module your code becomes-single Responsibility Principle
* Reusuable
* Testable
* Maintainable

# Custom -hooks
It is responsible for Fetching data
so that the components only responsible on displaying the data

To reduce the bundle size and bloating we use
# Dynamic bundling
# code splitting
# lazy loading
# on demand loading
# dynamic import
# chunking ------->divides the app into small bundlers so that the app performance will be fast it will load the app fast
in the large scale web apps the index.js file size is so large it makes the app loading slowly t avoid this we will divide the index.js file into small bundlers so that app runs fast.
# lazy function
const Grocery=lazy(()=> import("./component/Grocery"))//dynamic import
React is very fast it will load the UI in milliseconds While the code for the lazy component is still loading, attempting to render it will suspend and gives error. 

# Suspense - Suspense component which is present in React is used to display a loading indicator while it’s loading.to avoid suspense error
# fallback-we can write what should dispaly in the UI in this fallback method call

> Libraries and frameworks of CSS
# SCSS
# Sass
# styled components
# tailwind CSS
# Material UI
# Bootstrap
# Chakra UI
# ant Design

# tailwind css use inbuilt classname.
install tailwind css intellisense extension in visual studio code
different dvelopers write different code for css in production
if two developers write same code for button green it will become redundant css
By using Tailwind css all the developers comes in sink to write the css

# Higher order components 
Is a function that takes a component and returns a component
a function takes the component and enhances(change the data) of that component and returns new component 

# Controlled and Uncontrolled components
controlled components - component is controlled by a parent component 
for example to show items using useState function parent component contains that function and send the showitems as a props to children component
parent component has control to show items of children component.

Uncontrolled component-component has its own state and controlled by itself
for example to show items using useState function this component itself conatins that function and has its own control to show or hide items.

# Lifting the state up

# props drilling
passing data globally using props
like if higher or parent component has some data to pass it over the children basically we use props to pass that data 
and the problem occurs when they are so many children and we want to pass data from parent component to 10th children component we need to pass props to all the 10 childrens irrespective of their need.

To avoid this one way we use useContext hook

# useContext
# Consumer
# Provider

# React and Redux are different libraries
# Zustand is also a library used for managing state
# Redux-used for managing state
Redux offers easy debugging
It is not mandatory in our application use it when it requires
Preferably large scale appplications where there is alot of reading and writing UI

# Redux behind the scenes uses immer takes new state and calculate the differences from the existing state and updates in new State and gives to redux.

# Redux tool kit

Read RDK query

install Redux dev tools

earlier we use middleware and thunks now we use RDK query