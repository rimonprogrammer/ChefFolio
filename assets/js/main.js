// preloader start *****
const preloader = document.getElementById('preloader');
if(preloader){
    window.addEventListener("load", (()=>{
        preloader.style.display = "none";
    }));
}
// preloader end *****

// index.html start *****
const notification_btns = document.getElementById('notification_btns');
const notifications = document.getElementById('notifications');
if(notification_btns){
    notification_btns.addEventListener("click", (()=>{
        notifications.classList.toggle('bar_active');
    }));
}
        
const home = document.querySelector('.home');
const blogs = document.querySelector('.blogs');
const masonry_item = document.querySelectorAll('.card-img');
if(home){
    masonry_item.forEach((element) => {
        element.addEventListener('click', () => {
          blogs.classList.add('active-blogs');
        });
    });
    
    const blog_cross = document.querySelector('.blog_cross');
    blog_cross.addEventListener("click", (()=>{
      blogs.classList.remove('active-blogs');
    }));
}
// index.html end *****


// navbar start *****
const notification_btn = document.getElementById('notification_btn');
const profile_btn = document.getElementById('profile_btn');
const message_btn = document.getElementById('message_btn');
const notification = document.getElementById('notification');
const profile = document.getElementById('profile');
const message = document.getElementById('message');
if(notification){
    message_btn.addEventListener("click", (()=>{
        message.classList.toggle('bar_active');
    }));
    notification_btn.addEventListener("click", (()=>{
        notification.classList.toggle('bar_active');
    }));
    profile_btn.addEventListener("click", (()=>{
        profile.classList.toggle('bar_active');
    }));
}

const toggleBar = document.getElementById('toggleBar');
const faBars = document.querySelector('.fa-bars');
const faXmark = document.querySelector('.fa-xmark');
if(toggleBar){
    toggleBar.addEventListener("click", (()=>{
        faBars.classList.toggle('unActive_bars');
        faXmark.classList.toggle('active_xmark');
        if(notifications){
            notifications.classList.toggle('down_bars');
        }
        message.classList.toggle('down_bar');
        notification.classList.toggle('down_bar');
        profile.classList.toggle('down_bar');
    }));
}
// navbar end *****


// file upload *****
const  CMN_Upload = document.querySelector('.CMN_Upload');
if(CMN_Upload){
    const file = document.querySelector('.file');
    CMN_Upload.addEventListener("click", (()=>{
        file.click();
    }));
}

const  CMN_Uploads = document.querySelector('.CMN_Uploads');
if(CMN_Uploads){
    const files = document.querySelector('.files');
    CMN_Uploads.addEventListener("click", (()=>{
        files.click();
    }));
}
// file upload end *****


// ***** all common classes  *****
function ClassAddFun(elementSelector1, elementSelector2, classToToggle, operation){
    const element1 = document.querySelector(elementSelector1);
    const element2 = document.querySelector(elementSelector2);

    if (element1 && element2) {
        element1.addEventListener("click", () => {
            if (operation === "add") {
                element2.classList.add(classToToggle);
            } else if (operation === "remove") {
                element2.classList.remove(classToToggle);
            } else {
                console.warn("Invalid operation specified.");
            }
        });
    } else {
        console.warn("One or both elements not found.");
    }
};

// upload project
ClassAddFun(".upload_project", ".upload-images", "active-upload-image", "add");
ClassAddFun(".Discard_project", ".upload-images", "active-upload-image", "remove");

// blogs
ClassAddFun(".masonry_item", ".blogs", "active-blogs", "add");
ClassAddFun(".blog_cross", ".blogs", "active-blogs", "remove");

// hire
ClassAddFun(".hire-now", ".hire-inbox", "active-hire-inbox", "add");
ClassAddFun(".hire_cross", ".hire-inbox", "active-hire-inbox", "remove");

// view job
ClassAddFun(".view_job", ".job-application", "active-job", "add");
ClassAddFun(".job_application_cross", ".job-application", "active-job", "remove");

// submit job application
ClassAddFun(".apply_job", ".submit-job-application", "active-job", "add");
ClassAddFun(".submit_cross", ".submit-job-application", "active-job", "remove");

// create job post
ClassAddFun(".create_job", ".create-job-post", "active-job", "add");
ClassAddFun(".Discard_job", ".create-job-post", "active-job", "remove");

// inbox message
ClassAddFun(".msg_user", ".sent-message", "active-sent_message", "add");
ClassAddFun(".remove_icon", ".sent-message", "active-sent_message", "remove");

// certification
ClassAddFun(".add_certification", ".certification", "active-certification", "add");
ClassAddFun(".Discard_certification", ".certification", "active-certification", "remove");


// forYou start
const forYou = document.querySelector('.forYou');
const forYouBlogs = document.querySelector('.blogs');
const forYouBlogs_masonry_item = document.querySelectorAll(".masonry-item");
if(forYou){
    forYouBlogs_masonry_item.forEach((element) => {
        element.addEventListener('click', () => {
            forYouBlogs.classList.add('active-blogs');
        });
    });
    
    const blog_cross = document.cloneNode('blog_cross');
    blog_cross.addEventListener("click", (()=>{
        blogs.classList.remove('active-blogs');
    }));
}
// forYou end


// company.html start *****
const company_top = document.querySelector('.company-top');
const job_application = document.querySelector('.job-application');
const view_job = document.querySelectorAll('.view_job');
if(company_top){
    view_job.forEach((element) => {
        element.addEventListener('click', () => {
            job_application.classList.add('active-job');
        });
    });
    
    const job_application_cross = document.querySelector('job_application_cross');
    job_application_cross.addEventListener("click", (()=>{
        job_application.classList.remove('active-job');
    }));
}   
// company.html end *****


// company and client profile (follow)  *****
const follow = document.querySelector('.follow');
const followedCheck = document.querySelector('.followed-check');
const followUser = document.querySelector('.follow-user');
if(follow){
    follow.addEventListener("click", (()=>{
        followedCheck.classList.toggle('Active-check');
        followUser.classList.toggle('UnActive-user');
        follow.classList.toggle('unique-follow-btn');
    }));
}
// follow end  *****


// hire page
const category_btn = document.getElementById('category_btn');
const button_option = document.getElementById('button_option');
const arrow_top = document.getElementById('arrow_top');
const arrow_down = document.getElementById('arrow_down');
if(category_btn){
    category_btn.addEventListener("click", (()=>{
        button_option.classList.toggle('active_btn_option');
        category_btn.classList.toggle('active_category_btn');
        arrow_top.classList.toggle('active_arrow_top');
        arrow_down.classList.toggle('unActive_arrow_down');
    }));
}



// love or like section start
const love_btn = document.querySelector('.love-btn');
const like_btn = document.querySelector('.like-btn');
if(love_btn){
    like_btn.addEventListener('click', () => {
        like_btn.classList.add('delete-like-btn');
        love_btn.classList.add('active-love-btn');
    });

    love_btn.addEventListener('click', () => {
        like_btn.classList.remove('delete-like-btn');
        love_btn.classList.remove('active-love-btn');
    });
}


const store = document.querySelector('.store');
const like_icon = document.querySelectorAll('.like-icon');
if(like_icon){
    like_icon.forEach((img) =>{
        img.addEventListener("click", (()=>{
            console.log(img.src)
            img.src = `assets/images/lovered.png`
            img.classList.toggle('like-icon');
            
            if(img.className == 'like-icon'){
                if(store){  // for store page(white like button)
                    img.src = `assets/images/Like button.png`;
                }
                else{   // for home page(black like button)
                    img.src = `assets/images/love-1.png`;
                }
            }
        }));
    })
}
// love or like section end


// hire start
const hire_inbox = document.querySelector('.hire-inbox');
const hire_now = document.querySelectorAll(".hire_now");
const hire_cross = document.querySelector('.hire_cross');
if(hire_inbox){
    hire_now.forEach((element) => {
        element.addEventListener('click', () => {
            hire_inbox.classList.add('active-hire-inbox');
        });
    });
    
    hire_cross.addEventListener("click", (()=>{
        hire_inbox.classList.remove('active-hire-inbox');
    }));
}
// hire end