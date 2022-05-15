# eCommerce Front-end Project

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

<p>A front-end web application built to interact with modern e-commerce APIs.</p>
<p>This application consists of three main widgets: product overview and styles, related and saved products, and ratings & reviews.</p>

<h2>Lighthouse Performance Metrics</h2>

![Screen Shot 2022-04-14 at 6 41 32 PM](https://user-images.githubusercontent.com/97769405/168492294-2cf2e721-1d71-4431-a4bd-4ada7e9b8f24.png)


<h2>Product Overview</h2>
<p>Contributor: Kyle Nissley</p>
The product overview section consists of three main sections: gallery, product details, and product description.
<h3>1. Gallery</h3>
<p>The Gallery section handles displaying a product/style combination to the user.</p>

<h4>The main features of this section are:</h4>
<ul>
  <li>
      <span>The user can cycle through images with the carousel controls or thumbnail interaction:</span>
    
![FEC-overview-cycle](https://user-images.githubusercontent.com/79770577/163687479-d559f509-7e3b-42a3-a960-e5c20fc6bc54.gif)

    
  </li>

  <li>
    <span>The user can go into a widescreen view and zoom on the image:</span>
    
![FEC-widescreen-zoom](https://user-images.githubusercontent.com/79770577/163687809-e2a8aa54-706f-40f8-95ce-08c3129e034c.gif)

  </li>
</ul>


<h3>2. Product Details</h3>
<p>The Product Details section displays various information about the product to the user and includes the checkout interaction.</p>

<h4>The main features of this section are:</h4>
<ul>
  <li>
    <span>The product details. This includes the average rating and the product's name and category</span>
    
![Screen Shot 2022-04-16 at 1 58 26 PM](https://user-images.githubusercontent.com/79770577/163688024-02f4e581-b00b-4b12-88d9-3503fec477bd.png)    
  </li>
  <li>
    <span>The style selection. Here a user can select between the available styles. This changes the gallery display and the price if a style is discounted.</span>
    
![FEC-overview-styles](https://user-images.githubusercontent.com/79770577/163688410-ddc32106-3f75-4fa0-a7e1-39005282023f.gif)

    
    
  </li>
  <li>
    <span>The checkout interaction. Here the user can select their desired size and quantity of the product. Once those fields are selected, the add to cart button will become interactive.</span>
    
    
![FEC-cart-ux](https://user-images.githubusercontent.com/79770577/163688498-67174eca-b3f7-455a-aaf2-7a8c7e85dc43.gif)

    
    
  </li>
</ul>

<h3>3. Product Description</h3>
<p>The product description section displays the product's description, features, and links to share the product on social media.</p>


![Screen Shot 2022-04-16 at 2 18 55 PM](https://user-images.githubusercontent.com/79770577/163688556-075672dc-d54e-44e1-b98e-f562d7bfe8b9.png)


<br/><br/>

<h2>Related Products & Your Outfit</h2>
<p>Contributor: Joe Van Camp</p>
The Related Products and Your Outfit section each involves a horizontal scrolling carousel with 2 main points of functionality: Viewing and navigating to products related to the Overview item and adding the Overview product to a persistent outfit collection. 
<h3>1. Related Products</h3>
<p>The Related Products section displays all similar products relating to the currently viewed Overview item.</p>

<h4>Main features include:</h4>
<ul>
  <li>
     <span>The ability to scroll through the list of related products specific to the currently viewed Overview item. An action button is available on all cards which reveals a dynamic trait-comparison modal on click:</span>
    
![related_product](https://user-images.githubusercontent.com/70232572/163691147-6445bacb-e230-4a3f-a008-0a9b8a848a7a.gif)

  </li>
</ul>

<h3>2. Your Outfit</h3>
<p> The Outfit section allows a user to add an Overview item to their collection which persists through their shopping experience.</p>

<h4>Main features include:</h4>
<ul>
     <li>The ability to add a favored product to a collection for later reference while shopping. </li>
     <li> Each product card contains a "remove" button to remove products from the collection as needed.</li>
     <li>As the collection expands, a carousel will automatically become available while the Add Item button will remain in place.</li>
     <li>The Outfit collection will persist through page changes.</li>
<br/><br/>

![outfit](https://user-images.githubusercontent.com/70232572/163691565-51cacfdd-bb6e-424c-99c6-9400e02774b1.gif)

</ul>

<h2>Reviews & Ratings</h2>
<p>Contributor: Justin Tang</p>
The Reviews & Ratings section consists of three main sections: metadata, reviews, and a review modal.
<h3>1. Metadata</h3>
<p>The Metadata section shows the average rating of every review for the selected product.</p>

<h4>Main features include:</h4>
<ul>
      <li>Filtering options for the review list. Upon clicking on any of the rating options (e.g. 5 Star), the review list will update to show reviews of that selected rating.</li>
  <li>The filter is also additive, so it is possible to apply multiple filters at once.</li>
<li>Once any number of filters are applied, a "Remove All Filters" link appears and will return the review list to its original state upon being clicked.</li>
    
<br/>
  
![Rating Breakdown](https://user-images.githubusercontent.com/97769405/163753428-ddddb531-5554-4fe6-899b-57f9f68d0bab.gif)

</ul>

<h3>2. Review List</h3>
<p>The Reviews section displays a list of reviews.</p>

<h4>Main features include:</h4>
<ul>
  <li>
    A sorting options dropdown menu. A user may sort the review list based on Relevance, Newest and Helpful.
  </li>
  
  <li>
    A link that marks a review as "Helpful". This increments the "Helpful" count by 1.
  </li>
  
  <li>
    A link that "Reports" a review. This will remove the review from the review list.
  </li>
  
  <li>
    A "More Reviews" button that loads two more reviews every single time it is clicked.
  </li>
  
  <li>
    An "Add A Review" button that opens up a review modal where users can leave their own review on the product.
  </li>
  
  <br/>
  
![sort and load](https://user-images.githubusercontent.com/97769405/163753750-37643a1e-473d-4c05-bbc2-555fe4a1770b.gif)
</ul>




<h3>3. Review Modal</h3>
<p>The Review Modal allows users to rate and review the selected product.</p>


<ul>
  <li>
   A star rating system that allows users to rate a review from a score of 1 to 5. Hovering over a star will fill in every star up to the selected star. Clicking on a star will save its position.
  </li>
  
  <li>
   Fields that allow users to include a summary, review body, name, email address. If any required fields are not filled out, an error message will be sent indicating which fields are missing.
  </li>
  
  <li>
    Radio buttons that allow users to select whether or not they recommend the selected product.
  </li>
  
  <li>
    Radio buttons that allow users to rate each characteristic of the selected product (size, width, comfort, quality, etc.).
  </li>
  
  <li>
    A discard button and a clickable backdrop that exits the modal and returns users to the product page.
  </li>
  <br/>

![modal](https://user-images.githubusercontent.com/97769405/163753974-3f0c65bb-3ecf-451b-9226-04f58638e9dd.gif)
  
</ul>

<br/><br/>
