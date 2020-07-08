<script>
  let first = "first";
  let last = "last";
  let email = "email";
  let subject = "subject";

  async function doPost() {
    const res = await fetch("http://localhost:8081/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first,
        last,
        email,
        subject
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
    const json = await res.json();
    result = JSON.stringify(json);
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }
  /* Style inputs */

  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    border-radius: 5px;
  }

  /* Style the container/contact section */
  .container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 10px;
  }
  /* Create two columns that float next to eachother */
  .column {
    float: left;
    width: 50%;
    margin-top: 6px;
    padding: 20px;
  }

  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
</style>


<div class="container">
  <div style="text-align:center">
    <h2>Contact Us</h2>
    <p>Leave us a message for comments & suggestions:</p>
  </div>
  <div class="row">
    <div class="column">
      <img src="fb.jpg" style="width:100%" alt="none" />
    </div>
    <div class="column">
      <form>
        <label for="fname">First Name:</label>
        <input
          type="text"
          id="fname"
          bind:value={first}
          placeholder="Your name.." />
        <label for="lname">Last Name:</label>
        <input
          type="text"
          id="lname"
          bind:value={last}
          placeholder="Your last name.." />
        <label for="email">Email:</label>
        <input
          type="text"
          id="email"
          bind:value={email}
          placeholder="@email.com" />
        <label for="subject">Subject:</label>
        <textarea
          id="subject"
          bind:value={subject}
          placeholder="Write something.."
          style="height:170px" />
        <button type="button" on:click={doPost}>Post it.</button>
      </form>
    </div>
  </div>
</div>
