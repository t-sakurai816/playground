const hello = (name: string): void => {
  console.log("Hello " + name + "!")
}

const your_name: string = "Takumi";

const goodby = (name: string): void => {
  console.log("Goodbye " + name)
}

hello(your_name);
goodby(your_name);