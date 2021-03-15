## Description of my solution

* I have built the solution using React Functional components and hooks.
* The styling is done using CSS modules to make the styles locally scoped to a component and approriate configuration is made in `webpack.config.babel.js` file.
* I have structured the application into main page and other reusable components (button, card, container, helper and navbar) by using React principle such as every component serves a single functionality and DRY principle.
* The logic to fetch data from the server is separated under a different folder `./src/api`. In a scenario where this application needs to be expanded for other API requests (POST, PUT, DELETE) this is where I would write my functions. 
* I have used es6+ features like spread operators, async/await and arrow functions at suitable places.
* I have placed the assets needed for the application into `fonts` and `images` folders.

## Things I would do next

* I would have directed to google maps using lat/lon data from the api once the user clicks on the location data in the card.
* I would have used other data points from the api to expand on more features in the application.

## Assumptions that I made

* While exploring the API end point I have used the [RandomUser.me/results=5](https://randomuser.me/api/?page=1&results=5) that will fetch 5 random results at a time. This was used in view of solving the problem of generating 5 random profiles, as [RandomUser.me API](https://randomuser.me/api/) provides data of a single profile and generate more API requests.
* I have modified the `webpack.config.babel.js` to enable CSS modules and different font styling to be used in the application.

## Libraries used

* [momentJs](https://momentjs.com/)
* [react-moment](https://www.npmjs.com/package/react-moment) - used for formatting Date of birth.
* [css-loader](https://webpack.js.org/loaders/css-loader/) - used for loading css in the DOM.
* [style-loader](https://webpack.js.org/loaders/style-loader/) - used for loading css in the DOM.