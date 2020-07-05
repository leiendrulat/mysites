<script>
var image;
  function showfirst(x) {
    switch (x) {
      case 1:
        image = "of.jpg";
        break;
      case 2:
        image = "apt.jpg";

        break;
      case 3:
        image = "of3.jpg";

        break;
      case 4:
        image = "of2.jpg";

        break;
      case 5:
        image = "of1.jpg";

        break;
      case 6:
        image = "cm.png";

        break;
      case 7:
        image = "office2.png";

        break;
      case 8:
        image = "house.png";

        break;
      default:
      // code block
    }
    return image;
  }
</script>

<style>
  /* The grid: Four equal columns that floats next to each other */
  .column {
    float: left;
    width: 22%;
    padding: 10px;
  }

  /* Style the images inside the grid */
  .column img {
    opacity: 0.8;
    cursor: pointer;
  }

  .column img:hover {
    opacity: 1;
  }

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  /* Expanding image text */
  #imgtext {
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: white;
    font-size: 20px;
  }

  /* Closable button inside the expanded image */
  .closebtn {
    position: absolute;
    top: 12em;
    right: 20em;
    color: red;
    font-size: 35px;
    cursor: pointer;
    border: 2px solid red;
  }
</style>

<h1 align="center">
  <strong>Sample of works</strong>
</h1>
<br />
<br />
<h2>Web Development</h2>
<div class="grid-container">
  <div class="item1">DMI Calculator</div>
  <div class="item2">Property Calculator</div>
  <div class="item3">Transportation</div>
  <div class="item4">Restaurant</div>
</div>
<hr />
<br />
<h2>Revit</h2>
<div class="row">
  <div class="column">
    <img
      class="of"
      src="of.jpg"
      alt="office"
      style="width:100%"
      on:click={() =>showfirst(1)} />
    <p>
      <b>Office:</b>
      Be amazed of this new office with an Area 2000sq.ft located in the heart
      of the city. With a lakeview that gives you peace and sirene.
    </p>
  </div>
  <div class="column">
    <img class="apt" src="apt.jpg" alt="apartment" on:click={() =>showfirst(2)} style="width:100%" />
    <p>
      <b>Condo Unit:</b>
      This condo unit could be yours, a single pad size 800sq.ft. Single bed and
      bath, for single or newlywed couple just wanted to have a new fresh start.
    </p>
  </div>
  <div class="column">
    <img class="ofc" src="of3.jpg" alt="office" style="width:100%"  on:click={() =>showfirst(3)} />
    <p>
      <b>Office Pad for Rent:</b>
      This Two leveled Office pad with an Area of 25000sq.ft with complete
      facilities and amenities, is an excelent location for a middle-size
      business.
    </p>
  </div>
  <div class="column">
    <img class="ofi" src="of2.jpg" alt="office" style="width:100%"  on:click={() =>showfirst(4)} />
    <p>
      <b>Condo Unit on a Penthouse</b>
      Is Perfect for a bachelor, whos looking for a fabulous top floor 1 bedroom
      condo in a highly desired location in the South Loop! Relax and grill out
      on the balcony that has great views of the Chicago skyline.
    </p>
  </div>
  <div class="column">
    <img class="ofic" src="of1.jpg" alt="office" style="width:100%"  on:click={() =>showfirst(5)} />
    <p>
      <b>Condo Unit on a Penthouse</b>
      Is Perfect for a bachelor, whos looking for a fabulous top floor 1 bedroom
      condo in a highly desired location in the South Loop! Relax and grill out
      on the balcony that has great views of the Chicago skyline.
    </p>
  </div>
  <div class="column">
    <img class="cm" src="cm.png" alt="office" style="width:100%"  on:click={() =>showfirst(6)} />
    <p>
      <b>Condo Unit on a Penthouse</b>
      Is Perfect for a bachelor, whos looking for a fabulous top floor 1 bedroom
      condo in a highly desired location in the South Loop! Relax and grill out
      on the balcony that has great views of the Chicago skyline.
    </p>
  </div>
  <div class="column">
    <img class="opis" src="office2.png" alt="office" style="width:100%"  on:click={() =>showfirst(7)} />
    <p>
      <b>Condo Unit on a Penthouse</b>
      Is Perfect for a bachelor, whos looking for a fabulous top floor 1 bedroom
      condo in a highly desired location in the South Loop! Relax and grill out
      on the balcony that has great views of the Chicago skyline.
    </p>
  </div>
  <div class="column">
    <img class="house" src="house.png" alt="office" style="width:100%"  on:click={() =>showfirst(8)} />
    <p>
      <b>Condo Unit on a Penthouse</b>
      Is Perfect for a bachelor, whos looking for a fabulous top floor 1 bedroom
      condo in a highly desired location in the South Loop! Relax and grill out
      on the balcony that has great views of the Chicago skyline.
    </p>
  </div>
  <div class="container">
    <span onclick="this.parentElement.style.display='none'" class="closebtn">
      &times;
    </span>
    <img id="expandedImg" src={image} alt="" style="width:100%" />

    <div id="imgtext" />
  </div>
</div>
<br />
<br />
<hr />
<h2>Autocad</h2>
<br />
<br />
<hr />
<h2>Sketches</h2>
<br />
<p>Coming Soon!</p>


