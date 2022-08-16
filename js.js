/*===== Google fonts====*/

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

/*==== Variaveis CSS ====*/
:root{
    --header-height: 3rem;

/*==== Cores ===*/  

    --title-color: #0B0A0A;
    --text-color: #403a3a;
    --text-color-light: #707070;
    --container-color: #fafafa;
    --container-color-alt: #f0efef;
    --body-color: #fcfcfc;

/*=== Fonte e Tipografia ===*/

    --body-font: 'Poppins', sans-serif;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1rem;
    --normal-font-size: .938rem;
    --small-font-size: .875rem;
    --smaller-font-size: .813rem;

/*=== Tamanho da fonte*/

    --font-medium: 500;
    --font-semi-bold: 600;

/*=== Margens===*/

    --mb-1: .5rem; 
    --mb-2: 1rem;
    --mb-3: 1.5rem;

/*=== z index ===*/

    --z-tooltip: 10;
    --z-fixed: 100;
}

/*=== BASE ===*/

*,::before,::after{

    box-sizing: border-box;
}

html{
    scroll-behavior: smooth;
}

/*=== Variaveis Temas Alternativos ===*/

body.dark-theme{
    --title-color: #f2f2f2;
    --text-color: #bfbfbf;
    --container-color: #212121;
    --container-color-alt: #181616;
    --body-color: #2b2b2b;
}

/*=== Botao Dark/Light===*/

.change-theme{
    position: absolute;
    right: 0;
    top: 2.2rem;
    display: flex;
    color: var(--text-color);
    font-size: 1.2rem;
    cursor: pointer;
}

.chance-theme:hover{
    color:var(--title-color);
}

/*=== Tamanho da fonte e variaveus cv ===*/

body.scale-cv{
    --h1-font-size: .938rem;
    --h2-font-size: .938rem;
    --h3-font-size: .875rem;
    --normal-font-size: .813rem;
    --small-font-size: .75rem;
    --smaller-font-size: .620rem;
}

/*=== Botao gerar PDF ===*/

.generate-pdf{
    position: absolute;
    top: 1.2rem;
    left:0;
    display: none;
    color: var(--text-color);
    font-size: 1.2rem;
    cursor: pointer;
}

.generate-pdf:hover{
    color: var(--title-color);
}

/*=== Classes modificadas para diminuir tamanho para A4 ===*/

.scale-cv .change-theme,
.scale-cv ,.generate-pdf{
    display: none;
}

.scale-cv .bd-container{
    max-width: 595px;
}

.scale-cv .section{
    padding: 0.8rem 1rem 1rem;
}

.scale-cv .section-title{
    font-size: var(--small-font-size);
    margin-bottom: .75rem;
}

.scale-cv .resume_left,
.scale-cv .resume_right{
    padding: 0 1rem;
}

.scale-cv .home_img{
    width: 90px;
    height: 90px;
}

.scale-cv .home_container{
    gap: 1rem;
}

.scale-cv .home_data{
    gap:.25px;
}

.scale-cv .home_address,
.scale-cv .social_container{
    gap: 75rem;
}

.scale-cv .home_icon,
.scale-cv .social_icon,
.scale-cv .interests_icon{
    font-size: 1rem;
}

.scale-cv .education_container,
.scale-cv .experience_container{
    gap:1rem;
}

.scale-cv .education_time,
.scale-cv .experience_time{
    padding-right: .5rem;
}

.scale-cv .education_line,
.scale-cv .experience_line{
    width: 1px;
    height: 110%;
    transform: translate(5px, 0);
}

.scale-cv .education_data,
.scale-cv .experience_data{
    gap:25rem;
}

.scale-cv .education_studies,
.scale-cv .experience_campany,
.scale-cv .experience_description,
.scale-cv .education_year,
.scale-cv .edcuation_time{
    font-size: var(--smaller-font-size);
}

.scale-cv .skills_name{
    margin-bottom: var(--mb-1);
}

.scale-cv .interests_container{
    grid-template-columns: repeat(3, max-content);
    column-gap: 2.5rem;
}

body{
    margin: 0 0 var(--header-height) 0;
    padding: 0;
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    background-color: var(--body-color);
    color: var(--text-color);
}

h1,h2,h3, ul, p{
    color: var(--text-color);
    font-weight: var(--font-medium);
}

h1,h2,h3{
    color: var(--text-color);
    font-weight: var(--font-medium);
}

ul{
    padding: 0;
    list-style: none;
}

a{
    text-decoration: none;
}

img{
    max-width: 100%;
    height: auto;
}

/*=== Classes CSS ===*/

.section{
    padding: 1.5rem 0;
}

.section-title{
    font-size: var(--h2-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
    text-transform: uppercase;
    letter-spacing: .35rem;
    margin-bottom: var(--mb-3);
}

/*=== Layout ===*/

.bd-container{
    max-width: 968px;
    width: calc(100% -3rem);
    margin-left: var(--mb-3);
    margin-right: var(--mb-3);
}

.bd-grid{
    display: grid;
    gap: 1.5rem;
}

.l-header{
    width: 100px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: var(--z-fixed);
    background-color: var(--body-color);
    box-shadow: 0 -1px 4px rgba(0,0,0,.1);
    transition: .3s;
}

/*=== Nav ===*/

.nav{
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media screen and (max-width: 968px){
    .nav_menu{
        position: fixed;
        bottom: -100%;
        left: 0;
        width: 100%;
        padding: 2rem 1.5rem;
        background-color: var(--body-color);
        box-shadow: 0 1px 4px rgba(0,0,0,.1);
        border-radius: 1rem 1rem 0 0;
        z-index: var(--z-fixed);
        transition: .3s;
    }
}

.nav_logo, 
.nav_toggle{
    color: var(--title-color);
    font-weight: var(--font-medium);
}

.nav_toggle{
    font-size: 1.2rem;
    cursor: pointer;
}

.nav_item{
    text-align: center;
}

.nav_list{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.nav_link{
    display: flex;
    flex-direction: column;
    font-size: var(--small-font-size);
    color: var(--text-color-light);
    font-weight: var(--font-medium);
}

.nav_link:hover{
    color: var(--title-color);
}

.nav_icon{
    font-size: 1.2rem;
    margin-bottom: var(--mb-1);
}

/*Mostrar Menu*/

.show-menu{
    bottom: var(--header-height);
}

/*Link de ativacao do menu*/

.active-linkl{
    color: var(--title-color);
}

/*=== home ===*/
.home{
    position: relative;
}

.home_container{
    gap: 3rem;
}

.home_data{
    gap: .5rem;
    text-align: center;
}

.home_img{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    justify-self: center;
    margin-bottom: var(--mb-1);
}

.home_title{
    font-size: var(--h1-font-size);
}

.home_profession{
    font-size: var(--normal-font-size);
    margin-bottom: var(--mb-1);
}

.home_address{
    gap: 1rem;
}

.home_information{
    display: flex;
    align-items: center;
    font-size: var(--small-font-size);
}

.home_icon{
    font-size: 1.2rem;
    margin-right: .25rem;
}

.home_button-movil{
    display: inline-block;
    border: 2px solid var(--text-color);
    color: var(--title-color);
    padding: 1rem 2rem;
    border-radius: .25rem;
    transition: .3s;
    font-weight: var(--font-medium);
    margin-top: var(--mb-3);
}

.home_button-movil:hover{
    background-color: var(--text-color);
    color: var(--container-color);
}

/*=== social ===*/

.social_container{
    grid-template-columns: max-content;
    gap: 1rem;
}

.social_link{
    display: inline-flex;
    align-items: center;
    font-size: var(--small-font-size);
    color: var(--text-color);
}

.social_link:hover{
    color: var(--title-color);
}

.social_icon{
    font-size: 1.2rem;
    margin-right: .25rem;
}

/*=== perfil ===*/

.profile_description{
    text-align: center;
}

/*=== formacao e experiencia profissional ===*/

.education_container,
.experience_container{
    display: flex;
}

.edcuation_time,
.experience_time{
    padding-right: 1rem;
}

.education_rounder,
.experience_rounder{
    position: relative;
    display: block;
    width: 16px;
    height: 16px;
    background-color: var(--text-color-light);
    border-radius: 50%;
    margin-top: .25rem;
}

.education_line,
.experience_line{
    display: block;
    width: 2px;
    height: 110%;
    background-color: var(--text-color-light);
    transform: translate(7px, 0);
}

.education_title,
.experience_title{
    font-size: var(--h3-font-size);
}

.education_studies
.experience_campany{
    font-size: var(--small-font-size);
    color: var(--title-color);
}

.education_year{
    font-size: var(--small-font-size);
}

/*=== habilidades ===*/

.skills_content 
.languages_content{
    grid-template-columns: repeat(2, 1fr);
}

.skills_name
.languages_name{
    display: flex;
    align-items: center;
    margin-bottom: var(--mb-3);
}

.skills_cicle
.languages_cicle{
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: var(--text-color);
    border-radius: 50%;
    margin-right: .75rem;
}

/*=== interesses ===*/

.interests_content{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.interests_icon{
    font-size: 1.5rem;
    color: var(--text-color-light);
    margin-bottom: .25rem;
}

.interests_name{
    text-align: center;
}

/*scroll top*/

.scrolltop{
    position: fixed;
    right: 1rem;
    bottom: -20%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .3rem;
    background-color: var(--container-color-alt);
    border-radius: .4rem;
    z-index: var(--z-tooltip);
    transition: .4s;
    visibility: hidden;
}

.scrolltop_icon{
    font-size: 1.2rem;
    color: var(--text-color);
}

.show-scroll{
    visibility: visible;
    bottom: 5rem;
}

/*=== media queries ===*/

/*menu de duas colunas para dispositivos menores*/

@media screen and (max-width: 320px){
    .nav_list{
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem .5rem;
    }
}

/*classe modificadas para teclas maiores*/

@media screen and (min-width:968px){
    body{
        margin: 3rem 0;
    }
    .bd-container{
        margin-left: auto;
        margin-right: auto;
    }
    .resume{
        display: grid;
        grid-template-columns: .5fr 1fr;
        background-color: var(--container-color);
        box-shadow: 0 0 8px rgba(13,12,12,.15);
    }
    .resume_left
    .resume_right{
        padding: 0 1.5rem;
    }

    .generate-pdf{
        display: inline-block;
    }

    .section-title, 
    .profile_description{
        text-align: initial;
    }

    .home_container{
        gap: 1.5rem;
    }
    
    .home_button-movil{
        display: none;
    }

    .languages_button-movil{
        display: none;
    }

    .languages_content{
        grid-template-columns: repeat(3, max-content);
        column-gap: 3.5rem;
    }

    .interests_container{
        grid-template-columns: repeat(2, max-content);
        column-gap: 3.5rem;
    }
}