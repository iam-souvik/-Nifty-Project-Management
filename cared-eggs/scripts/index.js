//Popup window opening function 
function openPopUp(abc) {
    abc.style.visibility = "visible";
    document.querySelector("body").style.overflow = "hidden";
}


//Popup window closing function
function closePopUp(abc) {
    abc.style.visibility = "hidden";
    document.querySelector("body").style.overflow = "scroll";
}

//--------------------------Video Player--------------------------
let videoPlayButton = document.querySelector("#play_button");
let videoPlayer = document.querySelector("#video_player");
let closeVideoPlayer = document.querySelector("#close_video_player");

videoPlayButton.addEventListener("click", function () {
    openPopUp(videoPlayer);
})


videoPlayer.addEventListener("click", function () {
    closePopUp(videoPlayer);
})

closeVideoPlayer.addEventListener("click", function () {
    closePopUp(videoPlayer)
})



//-------------------------------Sliding part-------------------------------
let roadmaps = [
    {
        name: "Roadmaps",
        heading: "Set Goals & Timelines",
        desc: "Set a visual timeline for your big-picture goals and build team alignment by automating progress as tasks are completed. ",
        image: "https://niftypm.com/_nuxt/img/large@2x.51eeb43.webp"
    },

    {
        name: "Tasks",
        heading: "Collaborate on Tasks",
        desc: "Flexibly organize, prioritize, and track daily work with a high level of detail using Kanban, List, Timeline, Calendar, and Swimlane views. ",
        image: "https://niftypm.com/_nuxt/img/large@2x.82364f8.webp"
    },

    {
        name: "Discussions",
        heading: "Establish Knowledge Hub",
        desc: "Empower all members to share ideas, finalize specifications, & gather feedback in real-time with chat and one-click video calls. ",
        image: "https://niftypm.com/_nuxt/img/large@2x.c91cddb.webp"
    },

    {
        name: "Docs",
        heading: "Create Docs & Wikis",
        desc: "Create beautiful docs, notes, and wikis for your projects and share with anyone. Nifty even integrates natively with Google Docs. ",
        image: "https://niftypm.com/_nuxt/img/large@2x.7a68883.webp"
    },

    {
        name: "Reporting",
        heading: "Automate Reporting",
        desc: "Access automated progress reporting across all your projects and team activities to ensure operational clarity. ",
        image: "https://niftypm.com/_nuxt/img/large@2x.c9f3a5a.webp"
    }
]


let engineering = [
    {
        name: "Engineering",
        description: "Let go of fragmented tools. Plan, track, and manage your workflows with award-winning ease — in one collaborative workspace.",
        points: ["Real-time progress reporting with Milestones", "Custom development workflows with if/then rules", "Manage issues, bugs, and changes directly in one place"],
        image: "https://niftypm.com/_nuxt/img/large@1x.c481d6e.webp"
    },

    {
        name: "Sales",
        description: "Empower your sales teams by adding flow to their work with real-time reporting and insights using automated workflows.",
        points: ["Track lead status and values for pipeline visibility", "Create & store sales collateral for streamlined access", "Automate the creation of projects upon closing of leads"],
        image: "https://niftypm.com/_nuxt/img/large@1x.a9e1772.webp"
    },

    {
        name: "Marketing",
        description: "Deliver better results with fewer tools. Manage tasks, campaigns, and marketing content with real-time collaboration in one place.",
        points: ["Expedite approval for creatives with Proofing", "Create & track marketing campaigns as Milestones", "Align content schedules using Calendar View for Tasks"],
        image: "https://niftypm.com/_nuxt/img/large@1x.10c81ee.webp"
    },

    {
        name: "Product",
        description: "Build better products with team alignment. Create clear product roadmaps and automate progress reporting as tasks are completed.",
        points: ["Prioritize & track feature sprints as Milestones", "Build spec documents using Nifty or Google Docs", "Improve decision-making with custom Project Embeds"],
        image: "https://niftypm.com/_nuxt/img/large@1x.fade5e2.webp"
    },

    {
        name: "Client Management",
        description: "Never lose a client due to poor communication again. Real-time collaboration to shorten feedback cycles and automate progress reporting.",
        points: ["Instant messaging & one-click video meetings", "Centralize files & expedite approvals with Proofing", "Sharable project boards for real-time progress reporting"],
        image: "https://niftypm.com/_nuxt/img/large@1x.0c3cfc6.webp"
    },

    {
        name: "IT",
        description: "Streamline, centralize, and modernize your workflows. One app to manage your processes without letting anything fall through the cracks again.",
        points: ["Gather tickets using forms & prioritize resolutions", "Automate ticket assignments with status assignees", "Plan project timelines & deployments using Roadmaps"],
        image: "https://niftypm.com/_nuxt/img/large@1x.37d8320.webp"
    }
]

let roadmapsSpans = document.querySelectorAll("#roadmaps>div:first-child>div:first-child>span");

let engineeringSpans = document.querySelectorAll("#engineering>div:first-child>div:first-child>span");



let index = 0;
let slidShow = () => {

    let roadmapsHeading = document.querySelector("#roadmaps_heading");
    let roadmapsDescription = document.querySelector("#roadmaps_description");
    let roadmapsImage = document.querySelector("#roadmaps_image");


    let engineeringHeading = document.querySelector("#engineering_heading");
    let engineeringDescription = document.querySelector("#engineering_description");
    let oneOption = document.querySelector("#one");
    let twoOption = document.querySelector("#two");
    let threeOption = document.querySelector("#three");
    let engineeringImage = document.querySelector("#engineering_image")

    id = setInterval(() => {
        if (index === roadmaps.length) {
            index = 0;

            roadmapsSpans.forEach(function(el){
                el.style.color = "gray";
                el.style.borderBottom = "none";
            })

            engineeringSpans.forEach(function(el){
                el.style.color = "gray";
                el.style.borderBottom = "none";
            })
        }


        for (let i = 0; i < roadmapsSpans.length; i++) {

            if (roadmapsSpans[i].innerText == roadmaps[index].name) {
                roadmapsSpans[i].style.color = "#00baab";
                roadmapsSpans[i+1].style.color = "#00baab";
                roadmapsSpans[i].style.borderBottom = "2px solid #00baab";
            }
        }
        roadmapsHeading.innerText = roadmaps[index].heading;
        roadmapsDescription.innerText = roadmaps[index].desc;
        roadmapsImage.src = roadmaps[index].image;



        for (let i = 0; i < engineeringSpans.length; i++) {

            if (engineeringSpans[i].innerText == engineering[index].name) {
                engineeringSpans[i].style.color = "#00baab";
                engineeringSpans[i+1].style.color = "#00baab";
                engineeringSpans[i].style.borderBottom = "2px solid #00baab";
            }
        }
        engineeringHeading.innerText = engineering[index].name;
        engineeringDescription.innerText = engineering[index].description;
        oneOption.innerText = engineering[index].points[0];
        twoOption.innerText = engineering[index].points[1];
        threeOption.innerText = engineering[index].points[2];
        engineeringImage.src = engineering[index].image;


        index++;
    }, 5000)
};

slidShow();


let leftCarousal = document.querySelector("#left-carousal-items");
let rightCarousal = document.querySelector("#right-carousal-items");

function displayScrollableDivs(data, position){

    data.forEach(function(el){
        let div = document.createElement("div")
    
        let p = document.createElement("p");
        p.innerText = el.p;
    
        let authorName = document.createElement("p");
        authorName.className = "author_name";
        authorName.innerText = el.aN;
    
        let authorDesc = document.createElement("p");
        authorDesc.className = "author_desc";
        authorDesc.innerText = el.aD;
    
        div.append(p, authorName, authorDesc);
        position.append(div);
    })
}



let leftCarousalData = [
    {
        p: `"Nifty is a product that excels in many client environments. The ease of use makes it a powerful tool for managing our client portfolio."`,
        aN: "Stefan Schmidt",
        aD: "Executive Partner, Hammersbach"
    },

    {
        p: `“I feel like we've tried every project management platform the cloud has on offer — some have proven too complex or too simplistic for our requirements. Nifty has been a perfectly seamless transition.”`,
        aN: "Marc Held",
        aD: "CEO, ODYN"
    },

    {
        p: `Nifty is by far the best productivity tool I've ever used. They have consolidated so many tools down to one for my team, without compromising the experience.`,
        aN: "Rim N. Kay",
        aD: "Engineering Lead, Emovis"
    },

    {
        p: "Nifty is the glue my business was missing. Its one tool that my product team, development team, and clients all use, and now everyone knows exactly where to look for updates.",
        aN: "Bhargav Patel",
        aD: "Founder, IQM"
    },

    {
        p: `"Nifty is one of the most beautiful looking management tools on the market! This matters because customers are usually charmed by its aesthetics and intuitiveness."`,
        aN: "Marek Murawski",
        aD: "Project Manager, Mrvsky"
    },

    {
        p: `“My team and I have been using Nifty for about a year now, and it's been critical to our success in project planning and communication. ”`,
        aN: "Dave Braun",
        aD: "CEO, Pro website Creators"
    },

    {
        p: `In the world full of PM tools, Nifty is awesome and stand apart. Tried the "big" players and just keep coming back to Nifty.`,
        aN: "Dele Omotosho",
        aD: "Entrepreneur, Legal Tech"
    },

    {
        p: `We are huge Nifty fans! We use it to run our accounting firm and manage all our tasks and internal communication. Highly recommend it!`,
        aN: "Spencer Jones",
        aD: "Owner, Proact CFO"
    },

    {
        p: `"Nifty is a product that excels in many client environments. The ease of use makes it a powerful tool for managing our client portfolio."`,
        aN: "Stefan Schmidt",
        aD: "Executive Partner, Hammersbach"
    },

    {
        p: `“I feel like we've tried every project management platform the cloud has on offer — some have proven too complex or too simplistic for our requirements. Nifty has been a perfectly seamless transition.”`,
        aN: "Marc Held",
        aD: "CEO, ODYN"
    },

    {
        p: `Nifty is by far the best productivity tool I've ever used. They have consolidated so many tools down to one for my team, without compromising the experience.`,
        aN: "Rim N. Kay",
        aD: "Engineering Lead, Emovis"
    },

    {
        p: `"Nifty is one of the most beautiful looking management tools on the market! This matters because customers are usually charmed by its aesthetics and intuitiveness."`,
        aN: "Marek Murawski",
        aD: "Project Manager, Mrvsky"
    },
]

displayScrollableDivs(leftCarousalData, leftCarousal)

let rightCarousalData = [
    {
        p: `We are huge Nifty fans! We use it to run our accounting firm and manage all our tasks and internal communication. Highly recommend it!`,
        aN: "Spencer Jones",
        aD: "Owner, Proact CFO"
    },

    {
        p: `Nifty is a tool that gets used consistently, don't know why but this is such an exception over other tools that got implemented only to be ignored by my team.`,
        aN: "Raj Nadar",
        aD: "Founder, Sales Development Solutions"
    },

    {
        p: `“Great tool! We have been using it for over a year and the new features are very regular! It allows us to manage our technical roadmap as well as our newsletter strategy.”`,
        aN: "Loryanne Taste",
        aD: "Business Developer"
    },

    {
        p: `Nifty is amazing! I use it daily with my team and it's help my business grow by giving my team and I the tools needed to connect and stay on track`,
        aN: "Warren Wheller",
        aD: "Internet Marketer"
    },

    {
        p: `I've been using Nifty for over two years now and have found it to be an extremely reliable project management tool. I don't think I'll ever switch to another PM again.`,
        aN: "Alex Carvalho",
        aD: "Design Director"
    },

    {
        p: `“Nifty is super awesome. I invested in a lot of different products over the years and nothing compares to how professional Nifty is.”`,
        aN: "Rafal Piatek",
        aD: "CEO, iTech"
    },

    {
        p: `Nifty PM is pretty nifty! It's like having my own accountability partner, which is very important to me. I don't get anything done without it. So many great features, a super sexy UI design.`,
        aN: "Yvens Ulysse Jr.",
        aD: "Digital Marketing Strategist"
    },

    {
        p: `A non-bloated, well structured, straightforward to use, task, project and portfolio management solution by a visionary team that supports its product well.`,
        aN: "Alexander Daliyannis",
        aD: "Technical Project Manager"
    },

    {
        p: `"Nifty is a product that excels in many client environments. The ease of use makes it a powerful tool for managing our client portfolio."`,
        aN: "Stefan Schmidt",
        aD: "Executive Partner, Hammersbach"
    },

    {
        p: `“I feel like we've tried every project management platform the cloud has on offer — some have proven too complex or too simplistic for our requirements. Nifty has been a perfectly seamless transition.”`,
        aN: "Marc Held",
        aD: "CEO, ODYN"
    },

    {
        p: `Nifty is by far the best productivity tool I've ever used. They have consolidated so many tools down to one for my team, without compromising the experience.`,
        aN: "Rim N. Kay",
        aD: "Engineering Lead, Emovis"
    },

    {
        p: `We are huge Nifty fans! We use it to run our accounting firm and manage all our tasks and internal communication. Highly recommend it!`,
        aN: "Spencer Jones",
        aD: "Owner, Proact CFO"
    },

    {
        p: `Nifty is a tool that gets used consistently, don't know why but this is such an exception over other tools that got implemented only to be ignored by my team.`,
        aN: "Raj Nadar",
        aD: "Founder, Sales Development Solutions"
    },

    {
        p: `“Great tool! We have been using it for over a year and the new features are very regular! It allows us to manage our technical roadmap as well as our newsletter strategy.”`,
        aN: "Loryanne Taste",
        aD: "Business Developer"
    },

    {
        p: `Nifty is amazing! I use it daily with my team and it's help my business grow by giving my team and I the tools needed to connect and stay on track`,
        aN: "Warren Wheller",
        aD: "Internet Marketer"
    },
]

displayScrollableDivs(rightCarousalData, rightCarousal);



