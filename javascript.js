// Landing Page Jump


let jumpIsActive = false; //FOR OVERVIEW LOCK
let clickIsActive = false; //FOR ROCKET AND TEXT FIX;

function overviewDeletion() {

    //IMPORTANT! FOR OVERVIEW DELETION!!!!
    document.getElementById("scroll-overview").style.display = "none";
    document.getElementById("scroll-text").style.display = "none";
    jumpIsActive = true; //FOR OVERVIEW LOCK

}

function landingPageClick(page) {
    document.getElementById(page).addEventListener("click", function () {

        document.getElementById(page).classList.add(String(page) + '-click');
        document.getElementById(page).classList.add(String(page) + '-click-ph');
        if (String(page) == "graphic-design") {

            //Part For Rocket Hover Only
            clickIsActive = true;
            document.getElementById("rocket").classList.remove('graphic-design-hover-rocket');
            document.getElementById("rocket-text-one").classList.remove('graphic-design-hover-text');
            // ^^^^^^

            overviewDeletion();

            document.getElementById("wrapper").classList.add("wrapper-goodbye");
            document.getElementById("wholeSite-Graphic").classList.add("wholeSite-Graphic-Initialize");
            document.getElementById("rocket").classList.add("rocket-takeoff");
            document.getElementById("graphic-heading").classList.add("graphic-design-text-takeoff");
            document.getElementById("graphic-paragraph").classList.add("graphic-design-text-takeoff");
            document.getElementById("rocket-text-one").classList.add("graphic-design-text-takeoff");
            document.getElementById("graphic-navbar").classList.add("graphic-navbar-appear");

        } else if (String(page) == "networking") {

            overviewDeletion();

            document.getElementById("rocket").remove();
            setTimeout(function () {
                document.getElementById("shutdown").classList.add("shutdown-show");
            }, 1000)
            setTimeout(function () {
                document.getElementById("shutdown").classList.remove("shutdown-show");
                document.getElementById("WholeSite-Networking").classList.add("WholeSite-Networking-Initialize");

                // -------------------------------- Network Page Terminal -------------------------------- \\

                // Initializing...

                function terminalLine(id, text, delay) {

                    function terminalCalc(id, text) {
                        for (let i = 0; i < text.length; i++) {
                            setTimeout(function () {
                                document.getElementById(id).innerHTML += text.charAt(i);
                            }, (100 * i) / text.length);
                        }
                    }
                    setTimeout(terminalCalc, delay * 500, id, text);

                }

                // Content & Terminal Removal
                function terminalContent(id, id2, text) {

                    setTimeout(function () {
                        document.getElementById(id).innerHTML = "------------------------------------------- content -------------------------------------------";
                    }, 2000)

                    setTimeout(function () {
                        document.getElementById(id2).innerHTML = String(text);
                    }, 2100)

                    setTimeout(function () {
                        document.getElementById("initText").remove();
                    }, 2300)


                }
                terminalLine("term1", "Initialize...", 0);
                terminalLine("term2", "HTML.v5 check...", 0.3);
                terminalLine("term3", "CSS.v3.00 check...", 0.6);
                terminalLine("term4", "Locating js type=text/javascript", 1);
                terminalLine("term5", "Booting pK.OS", 1.3);
                terminalLine("term6", ".", 1.6);
                terminalLine("term7", ".", 2);
                terminalLine("term8", ".", 2.3);
                terminalLine("term9", ".OK!", 2.6);
                //terminalLine("term10", "SUCCESS!", 11);
                //terminalLine("term11", "ssh /?", 13);
                //terminalLine("term12", "# Warning! Unauthorized Access Strictly Prohibited! #", 15);
                //terminalLine("term13", "Pavle>", 17);
                //terminalLine("term14", "Pavle> enable", 18);
                //terminalLine("term15", "Pavle#>", 20);
                //terminalLine("term16", "Pavle#> show content", 22);
                terminalContent("content-breaker", "content", String("body div id=turnon/div div id=WholeSite-Networking !-- Entry Sequence -- div id=initText p id=term1 /p p id=term2 /p p id=term3 /p p id=term4 /p p id=term5 /p p id=term6 /p p id=term7 /p p id=term8 /p p id=term9 /p p id=term10 /p p id=term11 /p p id=term12 /p p id=term13 /p p id=term14 /p p id=term15 /p p id=term16 /p p id=content-breaker/p p id=content/p /div !-- NAVBAR -- div id=net-navigation h1 id=net-nav1 About /h1 h1 id=net-nav2 Experience /h1 h1 id=net-nav3 Cerificates /h1 h1 id=net-nav4 Services /h1 h1 id=net-nav5 Contact /h1 /div !-- WRAPPER -- div id=wrapper !-- Detail Overview -- div id=detail-overview div id=image img src=universal/pavle.jpg /div div id=links a href=https://www.linkedin.com/in/pavle-kuzmanovic-744604170/ target=_blankdiv class=social-link p LinkedIn /p /div/a a href=https://www.facebook.com/CremeFraicher/ target=_blankdiv class=social-link p Facebook /p /div/a a href=https://www.instagram.com/thecremefraicher/ target=_blankdiv class=social-link p Instagram /p /div/a /div div id=information ul li Name: Pavle /li li Surname: Kuzmanovic /li li Alias: CremeFraicher /li li Birth date: 04.10.1997. /li li Gender: Male /li li Location: Belgrade, Serbia /li li E-mail: {insert here} /li li Phone Number: [+381] 64 464-3530 /li /ul /div /div !-- About -- div id=about div id=about-title h1 About /h1 /div div id=text p During my studies at Singidunum University, I’ve grown more and more interested in networking and its’ security. The courses provided were enough to help me learn the ropes and advance my knowledge beyond the faculty, enabling me to apply for various courses & certification in the field and gaining interest to learn about the Linux Operating Systems, Kali specifically. From there, I’ve expanded on penetration methods, vulnerabilities, malicious social engineering, as well as identifying and preventing them. This, of course, helped me in my daily activities, as I am mainly a Windows user, a known targeted platform for malicious attacks. I am pretty frequent in using the internet on it, and now, with this expertise I’m able to protect myself from various attacks and educate others about the dangers on the World Wide Web and their measures of prevention. /p /div /div !-- Experience -- div id=experience div id=experience-title h1 Experience /h1 /div div id=text-one p In networking, I have extensive knowledge and experience about the TCP/IP and ISO stack, protocols used as well as routing, switching subnetting, vlan creation and inter-VLAN routing, EtherChannel technology, their protocols, function and configuration. img src=network-administrator/router.png My experience in this field covers advanced network setup for small to large enterprise networks, their security implementation, troubleshooting and problem solving. I use the Cisco Packet Tracer software as the initial network planner to ensure stability and optimality of the network configuration before implementing it physically. So far, I have successfully implemented a number of LAN networks, small to medium sized, and have implemented attack prevention methods to secure them further from the most frequent attacks. /p /div div id=text-two p In pen-testing, my experience covers the use of Kali Linux and its’ numerous tools, some of them being the air-ng tool package for wireless scanning, disruption and penetration, (b)Ettercap for ARP poisoning, DNS spoofing and Man-in-the-Middle attack execution, the Metasploit package for malware and backdoor creation and AV evasion, it’s deployment and execution on the target machine and many, many more. So far, img src=network-administrator/kali.png I have successfully deployed a wide range of attacks in a test environment, conducted as an experiment. Some of them being backdoor, spyware and trojan deployment, keylogger utilization and buffer overflow in software-based attacks, DoS, DDoS, SQL Injection, phishing and malicious javascript execution in web-based attacks, and MitM, ARP spoofing, DNS spoofing, evil twin attack and SSL stripping in network-based attacks. However, my expertise goes far beyond these examples and include a much broader range of methods for penetration testing which even extends to malicious social engineering. /p /div /div !-- Certificates -- div id=certificates div id=cert-title h1 Certificates /h1 /div div id=vitrina div class=cert div class=hover p Cisco Packet Tracer /p /div a href=network-administrator/cert_cpt.png target=_blankimg src=network-administrator/cert_cpt.png/a /div div class=cert div class=hover p NDG Linux Essentials /p /div a href=network-administrator/cert_le.png target=_blankimg src=network-administrator/cert_le.png/a /div div class=cert div class=hover p Cybersecurity /p /div a href=network-administrator/cert_itsc.png target=_blankimg src=network-administrator/cert_itsc.png/a /div div class=cert div class=hover p Privacy & Security /p /div a href=network-administrator/cert_zsecure1.png target=_blankimg src=network-administrator/cert_zsecure1.png/a /div div class=cert div class=hover p Ethical Hacking /p /div a href=network-administrator/cert_zsecure2.png target=_blankimg src=network-administrator/cert_zsecure2.png/a /div /div /div !-- Accomplishments -- div id=accomplishments div id=accomp-title h1 Accomplishments /h1 /div div id=text div id=li1/div div id=li2/div div id=li3/div div id=li4/div div id=li5/div div id=li6/div ul li onmouseover=showAccomp(li1) onmouseout=hideAccomp(li1) Network Modeling & Deployment /li li onmouseover=showAccomp(li2) onmouseout=hideAccomp(li2) Identifying & Securing a Physical Network Sabotage Attack /li li onmouseover=showAccomp(li3) onmouseout=hideAccomp(li3) Man-in-the-Middle attacks and discovery /li li onmouseover=showAccomp(li4) onmouseout=hideAccomp(li4) Backdoor deployment, execution and detection /li li onmouseover=showAccomp(li5) onmouseout=hideAccomp(li5) Various Malware deployment and detection /li li onmouseover=showAccomp(li6) onmouseout=hideAccomp(li6) SQL Injection and prevention /li /ul /div /div !-- Services -- div id=services div id=services-title h1 Services /h1 /div div id=menu h1 id=btn-network class=active-service Networking /h1 h1 id=btn-penetration Penetration /h1 h1 id=btn-diagnostics Diagnostics /h1 /div div id=text-block p id=service-block-text My services cover initial network planning and setup in a virtual environment, device and protocol configuration, subnetting and VLAN setup, security implementation and physical deployment. /p /div /div !-- Contact -- div id=contact div id=contact-title h1 Contact /h1 /div div id=message-form div id=subject p subject /p input type=text /div div id=message-field textarea rows=10 placeholder=//Type your message here.../textarea/textarea /div div id=button-message-send button Send Message /button /div /div div id=contact-form div id=name p name /p input type=text /div div id=email p e-mail /p input type=email placeholder=name@example.com /div /p /div /div !-- Exit Sequence -- div id=exit p [x] /p /div div id=exit-message p id=exit-message-console//system.message/p p id=exit-message-main Booting from flash/p /div /div"));

                // -------------- END ------------------ Network Page Terminal ----------------- END --------------- \\
            }, 2000)

        }

        else if (String(page) == "web-development") {

            overviewDeletion();

            document.getElementById("rocket").remove();
            document.getElementById("WholeSite-Web").classList.add("WholeSite-Web-Init");
            document.getElementById("WholeSite-Web").classList.add("WholeSite-Web-phone-init");

            setTimeout(function () {
                document.getElementById("web-contact-banner").classList.remove("web-contact-banner-anim");
                document.getElementById("web-contact-banner").classList.add("web-contact-banner-anim-fix");
                document.getElementById("web-tech-banner").classList.remove("web-tech-banner-anim");
                document.getElementById("web-tech-banner").classList.add("web-tech-banner-anim-fix");
            }, 3000)
        }
    });
}

// Landing Page Return
function rocketRefresh(rocket) {
    document.getElementById(rocket).addEventListener('click', function () {
        document.getElementById("rocket").classList.add("rocket-return");
        document.getElementById("sky-load").classList.add("sky-load-initialize");
        setTimeout(function () {
            location.reload()
        }, 5500)


    });
}

// Rocket Hover Fix
function rocketHoverFix() {


    var graphic = document.getElementById("graphic-design");

    graphic.addEventListener('mouseenter', function () {

        if (clickIsActive == false) {

            document.getElementById("rocket").classList.add('graphic-design-hover-rocket');
            document.getElementById("rocket-text-one").classList.add('graphic-design-hover-text');
        }
    })

    graphic.addEventListener('mouseleave', function () {

        if (clickIsActive == false) {
            document.getElementById("rocket").classList.remove('graphic-design-hover-rocket');
            document.getElementById("rocket-text-one").classList.remove('graphic-design-hover-text');
        }
    })


}

// ------------------------------------------------------------------------------------------------ Overview ------------------------------------------------------------------------------------------------ \\

// Refresh Page

function refreshTop() {
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    } else {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }
}

function scrollFix() {
    addEventListener('scroll', function () {
        positionY = window.scrollY;

        if (jumpIsActive == false) {

            if (positionY > 1 && ((positionY * 2)) < 90) {

                document.getElementById("wrapper").style.position = "fixed";
                document.getElementById("wrapper").style.transform = "rotateX(" + (positionY * 2) + "deg)";
                document.getElementById("wrapper").style.pointerEvents = "none";
                document.getElementById("BODY_SITE").style.backgroundColor = "white";
                document.getElementById("scroll-text").style.opacity = "0";
                document.getElementById("rocket").style.opacity = 0;

            } else if ((positionY * 2) >= 90) {

                document.getElementById("wrapper").style.transform = "rotateX(" + 90 + "deg)";
                document.getElementById("scroll-text").style.opacity = 1;
                document.getElementById("rocket").style.opacity = 0;

            } else {

                document.getElementById("wrapper").style.position = "absolute";
                document.getElementById("wrapper").style.pointerEvents = "auto";
                document.getElementById("BODY_SITE").style.backgroundColor = "black";
                document.getElementById("scroll-text").style.opacity = "0";
                document.getElementById("wrapper").style.transform = "rotateX(" + 0 + "deg)";
                document.getElementById("rocket").style.opacity = 1;


            }

        } else {

            //THIS IS REALLY IMPORTANT!!!
            document.getElementById("scroll-overview").style.display = "none";
            document.getElementById("scroll-text").style.display = "none";
        }

    })
}


// ------------------------------------------------------------------------------------------------ Graphic Design ------------------------------------------------------------------------------------------------ \\

// Navbar 
function navSelectGraph(main, jumper) {

    document.getElementById(main).addEventListener("click", function () {
        document.getElementById(jumper).scrollIntoView();
    })
}


// ------------------------------------------------------------------------------------------------ Networking ------------------------------------------------------------------------------------------------ \\




// -------------------------------- Network Page Terminal -------------------------------- \\

// Initializing...

function terminalLine(id, text, delay) {

    function terminalCalc(id, text) {
        for (let i = 0; i < text.length; i++) {
            setTimeout(function () {
                document.getElementById(id).innerHTML += text.charAt(i);
            }, (100 * i) / text.length);
        }
    }
    setTimeout(terminalCalc, delay * 500, id, text);

}

// Content & Terminal Removal
function terminalContent(id, id2, text) {

    setTimeout(function () {
        document.getElementById(id).innerHTML = "------------------------------------------- content -------------------------------------------";
    }, 10500)

    setTimeout(function () {
        document.getElementById(id2).innerHTML = text;
    }, 11000)

    setTimeout(function () {
        document.getElementById("initText").remove();
    }, 11500)


}

// Networking exit... 
function exitConsole(id, id2, button, animation) {
    document.getElementById(button).addEventListener("click", function () {

        limit = 1;

        document.getElementById(id2).classList.add("exit-message-appear")

        for (i = 0; i < limit; i++) {
            setTimeout(function () {
                setTimeout(function () {
                    document.getElementById(id).innerHTML += "."
                }, 50 * i)
                setTimeout(function () {
                    document.getElementById(id).innerHTML += "."
                }, 100 * i)
                setTimeout(function () {
                    document.getElementById(id).innerHTML += "."
                }, 150 * i)
                setTimeout(function () {
                    document.getElementById(id).innerHTML = "Booting from flash"
                }, 200 * i)
                if (i == limit) {
                    setTimeout(function () {
                        document.getElementById(animation).classList.add("turnon-appear")
                        document.getElementById(id2).remove();
                        document.getElementById(button).remove();
                    }, 800 * i)
                    setTimeout(function () {
                        location.reload()
                    }, 2000 * i)
                }
            }, 800 * i)
        }
    })
}

// Navbar 
function navSelect(main, jumper, other1, other2, other3, other4) {

    document.getElementById(main).addEventListener("click", function () {
        document.getElementById(main).classList.add("active-nav-item");
        document.getElementById(other1).classList.remove("active-nav-item");
        document.getElementById(other2).classList.remove("active-nav-item");
        document.getElementById(other3).classList.remove("active-nav-item");
        document.getElementById(other4).classList.remove("active-nav-item");
        document.getElementById(jumper).scrollIntoView();
    })
}

// Accomplishments
function showAccomp(div) {
    document.getElementById(div).classList.add("accomplishment-show");
}
function hideAccomp(div) {
    document.getElementById(div).classList.remove("accomplishment-show");
}

// Services
function selectService(main, other1, other2, textblock, text) {

    document.getElementById(main).addEventListener("click", function () {
        document.getElementById(main).classList.add("active-service");
        document.getElementById(other1).classList.remove("active-service");
        document.getElementById(other2).classList.remove("active-service");
        document.getElementById(textblock).innerHTML = text;
    })
}

// ------------------------------------------------------------------------------------------------ Web ------------------------------------------------------------------------------------------------ \\



// Landing Page Return
function garageOpen(garage) {
    document.getElementById(garage).addEventListener('click', function () {
        document.getElementById("WholeSite-Web").classList.add("WholeSite-Return");
        document.getElementById("WholeSite-Web").classList.add("WholeSite-Return-ph");
        document.getElementById("web-contact-banner").classList.add("web-contact-banner-anim-exit");
        document.getElementById("web-player-banner").classList.add("web-player-banner-exit");
        setTimeout(function () {
            document.getElementById("web-development").classList.remove("web-development-click");
            setTimeout(function () {
                location.reload();
            }, 300)
        }, 1000)
    });
}



//EMAIL SENDING FUNCTION GRAPHIC DESIGN

function sendMailTwo(params) {
    {
        if (document.getElementById("graphic_email_sender-subject").value.length == 0 || document.getElementById("graphic_email_sender-mail").value.length == 0 || document.getElementById("graphic_email_message-field").value.length == 0) {

            document.getElementById("graphic_email-output").innerHTML = "Fill in all the fields!";

            setTimeout(function () {
                document.getElementById("graphic_email-output").innerHTML = "LAUNCH!";
            }, 3000)


        } else {

            document.getElementById("graphic_email-output").innerHTML = "T-10 . . . 9 . . .";
            var tempParams = {
                subject: document.getElementById("graphic_email_sender-subject").value,
                from_email: document.getElementById("graphic_email_sender-mail").value,
                message: document.getElementById("graphic_email_message-field").value,
                from_name: "[Website User]",
                page: "Graphic Design",
            }
            emailjs.send('service_3wlww9f', 'template_4woqbq5', tempParams)
                .then(function (res) {
                    console.log("Success!", res.status);
                    document.getElementById("graphic_email_sender-subject").value = '';
                    document.getElementById("graphic_email_sender-mail").value = '';
                    document.getElementById("graphic_email_message-field").value = '';
                    document.getElementById("graphic_email-output").innerHTML = "Eagle 1 Foxtrot 2! Success!";
                })
            setTimeout(function () {
                document.getElementById("graphic_email-output").innerHTML = "LAUNCH!";
            }, 10000)

        }

    }


}

//EMAIL SENDING FUNCTION NETWORK

function sendMail(params) {
    {
        if (document.getElementById("network_email_sender-subject").value.length == 0 || document.getElementById("network_email_sender-mail").value.length == 0 || document.getElementById("network_email_sender-name").value.length == 0 || document.getElementById("network_email_message-field").value.length == 0) {

            document.getElementById("network_email_send-button").innerHTML = "Please fill in all the fields!";
            setTimeout(function () {
                document.getElementById("network_email_send-button").innerHTML = "Send Message";
            }, 3000)


        } else {

            document.getElementById("network_email_send-button").innerHTML = "Sending...";
            var tempParams = {
                subject: document.getElementById("network_email_sender-subject").value,
                from_email: document.getElementById("network_email_sender-mail").value,
                from_name: document.getElementById("network_email_sender-name").value,
                message: document.getElementById("network_email_message-field").value,
                page: "Networking",
            }
            emailjs.send('service_3wlww9f', 'template_4woqbq5', tempParams)
                .then(function (res) {
                    console.log("Success!", res.status);
                    document.getElementById("network_email_sender-subject").value = '';
                    document.getElementById("network_email_sender-mail").value = '';
                    document.getElementById("network_email_sender-name").value = '';
                    document.getElementById("network_email_message-field").value = '';
                    document.getElementById("network_email_send-button").innerHTML = "Message Sent!";
                })
            setTimeout(function () {
                document.getElementById("network_email_send-button").innerHTML = "Send Message";
            }, 10000)

        }

    }


}


// EMAIL SENDING FUCTION WEB

function sendMailThree(params) {
    {
        if (document.getElementById("web_email_sender-subject").value.length == 0 || document.getElementById("web_email_sender-mail").value.length == 0 || document.getElementById("web_email_sender-name").value.length == 0 || document.getElementById("web_email_message-field").value.length == 0) {

            document.getElementById("web_email-output").innerHTML = "Fill each box!";

            setTimeout(function () {
                document.getElementById("web_email-output").innerHTML = "Contact me! <br\> Use the form.";
            }, 3000)


        } else {

            document.getElementById("web_email-output").innerHTML = "Sending...";
            var tempParams = {
                subject: document.getElementById("web_email_sender-subject").value,
                from_email: document.getElementById("web_email_sender-mail").value,
                message: document.getElementById("web_email_message-field").value,
                from_name: document.getElementById("web_email_sender-name").value,
                page: "Web Development",
            }
            emailjs.send('service_3wlww9f', 'template_4woqbq5', tempParams)
                .then(function (res) {
                    console.log("Success!", res.status);
                    document.getElementById("web_email_sender-subject").value = '';
                    document.getElementById("web_email_sender-mail").value = '';
                    document.getElementById("web_email_message-field").value = '';
                    document.getElementById("web_email-output").innerHTML = "Email sent!";
                    document.getElementById("web_email_sender-name").value = '';
                })
            setTimeout(function () {
                document.getElementById("web_email-output").innerHTML = "Contact me! <br\> Use the form.";
            }, 10000)

        }

    }


}