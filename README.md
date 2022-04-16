# eCommerce Front-end Project
<p>A React app built to simulate a modern eCommerce page.</p>
<p>The page consists of three main widgets: the product overview, related and saved products, and ratings & reviews.</p>

<h2>Overview</h2>
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
