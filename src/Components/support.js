import { Sidebar } from "./Sidebar"
export const Support = () => {

    return (        
        <div>
            <div id="mainContainer">
                <Sidebar />
                <div id="supportBodyContainer">
                    <div>
                        <h1>Support</h1>
                        <p class="introText">Guides and resources for building components and writing content</p>
                    </div>
                    <div className="fullPodContainer">
                    <div className="fullPod">
                        <div className="fullPodHeader">
                            <h2>Coding Fundamentals</h2>
                        </div>
                        <div className="supportComponentContainer">
                                <div className="supportComponentsBody">
                                    <p><a href="https://developer.mozilla.org/en-US/" target="_blank">mdn</a> - MDN Web Docs, previously Mozilla Developer Network and formerly Mozilla Developer Center, is a documentation repository and learning resource for web developers. </p>
                                    <p><a href="https://www.w3schools.com/" target="_blank">w3 Schools</a> - W3Schools is a freemium educational website for learning coding online.</p>
                                    <p><a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a> - freeCodeCamp is a non-profit organization that consists of an interactive learning web platform, an online community forum, chat rooms, online publications and local organizations that intend to make learning web development accessible to anyone.</p>
                                    <p><a href="https://www.codecademy.com/">Codecademy</a> - Codecademy is an American online interactive platform that offers free coding classes in 12 different programming languages including Python, Java, Go, JavaScript, Ruby, SQL, C++, C#, Swift, and Sass, as well as markup languages HTML and CSS. </p>
                                    <p><a href="http://www.udemy.com/" target="_blank">Udemy, inc.</a> - Udemy, Inc. is a for-profit massive open online course provider aimed at professional adults and students.</p>
                                </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}