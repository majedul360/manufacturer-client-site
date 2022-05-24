import React from "react";

const Blogs = () => {
  return (
    <div className="px-4 md:px-12 lg:px-40 mt-8">
      <h3 className="text-2xl font-bold">
        How will you improve the performance of a React Application?
      </h3>
      <p className="text-lg my-4">
        Before optimizing a React application, we must understand how React
        updates its UI and how to measure an app’s performance. This makes it
        easy to solve any React performance problems. Let’s start by reviewing
        how the React UI updates.
        <p className="my-2 ">
          {" "}
          <span className="font-bold">
            1. Keeping component state local where necessary
          </span>
          <p className="text-lg">
            We’ve learned that a state update in a parent component re-renders
            the parent and its child components. So, to ensure re-rendering a
            component only happens when necessary, we can extract the part of
            code that cares about the component state, making it local to that
            part of the code.
          </p>
        </p>
        <p className="my-2 ">
          {" "}
          <span className="font-bold">
            2. Memoizing React components to prevent unnecessary re-renders{" "}
          </span>
          <p className="text-lg">
            Unlike the previous performance technique where refactoring our code
            gives us a performance boost, here we trade memory space for time.
            So, we must only memoize a component when necessary.
          </p>
        </p>
        <p className="my-2 ">
          {" "}
          <span className="font-bold">
            3. Code-splitting in React using dynamic import()
          </span>
          <p className="text-lg">
            ode-splitting is another important optimization technique for a
            React application. By default, when a React application renders in a
            browser, a “bundle” file containing the entire application code
            loads and serves to users at once.
          </p>
        </p>
      </p>

      <h3 className="text-2xl font-bold">
        What are the different ways to manage a state in a React application?
      </h3>
      <p className="text-lg my-4">
        There are a lot of different kinds of state through we can manage a
        state in a React application like as Local state, Global state, Server
        state, URL state. Local (UI) state – Local state is data we manage in
        one or another component. Global (UI) state – Global state is data we
        manage across multiple components. Server state – Data that comes from
        an external server that must be integrated with our UI state. URL state
        – Data that exists on our URLs, including the pathname and query
        parameters.
      </p>
      <h3 className="text-2xl font-bold">
        How does prototypical inheritance work?
      </h3>
      <p className="text-lg my-4">
        Every object with its methods and properties contains an internal and
        hidden property known as Prototype. The Prototypal Inheritance is a
        feature in javascript used to add methods and properties in objects. It
        is a method by which an object can inherit the properties and methods of
        another object. Traditionally, in order to get and set the Prototype of
        an object, we use Object.getPrototypeOf and Object.setPrototypeOf.
        Nowadays, in modern language, it is being set using proto.
      </p>
      <h3 className="text-2xl font-bold">
        Why you do not set the state directly in React?
      </h3>
      <p className="text-lg my-4">
        We don't update the state directly because of the following reasons: If
        I update it directly, calling the setState() afterward may just replace
        the update I made. When I directly update the state, it does not change
        this.state immediately. Instead, it creates a pending state transition,
        and accessing it after calling this method will only return the present
        value. I will lose control of the state across all components.
      </p>
      <h3 className="text-2xl font-bold">
        You have an array of products. Each product has a name, price,
        description, etc. How will you implement a search to find products by
        name?
      </h3>
      <p className="text-lg my-4">
        If I have an arry of products and if I want to implement a search to
        find products by name then I will use arry.filter() method to find
        products by name. I will take search field value then I will check that
        search field value includes in arry of element or not includes in arry
        of element if search field value includes in arry of element I will get
        arry of products on the other hand I will get empty arry.
      </p>
      <h3 className="text-2xl font-bold">
        What is a unit test? Why should write unit tests?
      </h3>
      <p className="text-lg my-4">
        A unit test is a way of testing a unit - the smallest piece of code that
        can be logically isolated in a system. In most programming languages,
        that is a function, a subroutine, a method or property. The isolated
        part of the definition is important. Unit testing allows software
        developers to actually think through the design of the software and what
        has to be done before they write the code. This can help them to stay
        focused and can also help them to create much better designs.
      </p>
    </div>
  );
};

export default Blogs;
