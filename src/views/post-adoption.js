const postAdoption = () => {
    /*const view =`
    <div class="main-container">
        <img src="images/logo.png" alt="logo" class="logo-adopt">
        <img src="images/home.png" alt="home-adopt" class="home-adopt">
        <h1> Tell us why motivated you to join our adopt community </h1>
    <div class="form_div" id="form-div">
        <form class="form" id="form">
        
        <p class="text">
            <textarea name="text" class="comment" id="comment" placeholder="What motivated me..."></textarea>
        </p>        
        
        <div class="submit">
            <button class="button" id="button">Edit</button>
            <button class="button" id="button">Publish</button>
        </div>
        
        </form>
        <h2>Welcome to the biggest pet adoption community</h2>
    </div>
    `;*/

    const view = `    
    <div class="main-container">
        <img src="images/logo.png" alt="logo" class="logo-adopt">
        <img src="images/home.png" alt="home-adopt" class="home-adopt">
        <h1> Tell us why motivated you to join our adopt community </h1>
    </div>
    <div class="post_container" id="post-container">
        
        <p class="text_input">
            <textarea  class="new_post" id="new-post" placeholder="What motivated me..."></textarea>
        </p>        
        
        <div class="button_container">
            <button class="edit_button" id="edit-button">Edit</button>
            <button class="publish_button" id="publish-button">Publish</button>
        </div>
        
        
        <h2>Welcome to the biggest pet adoption community</h2>
    </div>  
    `
}
    return postAdoption();
    
export default postAdoption;