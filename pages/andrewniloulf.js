import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React, { useState } from 'react';


export default function Home() {

    const [mobileMenu, setMobileMenu] = useState(styles.hiddenMobileMenu);

    let clicked = () =>  {
      console.log("CLICKED")
      if(mobileMenu == styles.hiddenMobileMenu){
        setMobileMenu(styles.visibleMobileMenu)
      }
      else{
        setMobileMenu(styles.hiddenMobileMenu)
  
      }
    }
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Kayemes</title>
        <meta name="description" content="Kayemes  Gallery" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin /> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:wght@300;400&family=Rubik+Microbe&family=Rubik+Moonrocks&family=Rye&family=Sigmar+One&family=Teko:wght@300;400;500;600;700&display=swap" rel="stylesheet"/> */}
        {/* <link href="https://db.onlinewebfonts.com/c/02408ccd8efcf169db4e41d6e0551118?family=NeueKabelW01-Regular" rel="stylesheet" type="text/css"/ >
        <link href="https://db.onlinewebfonts.com/c/aa50785d800d91e19890e9fbebd000c1?family=NeueKabelW01-Light" rel="stylesheet" type="text/css"/>
        <link href="https://db.onlinewebfonts.com/c/6a18c7bc57aa296c401a0a6560b97e19?family=P22CodaW01SC-SemiBoldSC" rel="stylesheet" type="text/css"/>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/> */}
      </Head>
    
    <div> 
    <Link href="/"> 
    <ul className={styles.menuList}> 
      <li className={styles.menuIcon}> <img src="imgs/books.jpg" className={styles.menuImg}/> </li>
        <li className={styles.menuListItem}>    <img src="imgs/books.jpg" className={styles.bookImg}/>    </li>
        {/* <li className={styles.menuListItem} onClick={clicked}> <Link href="/exhibitions"> Exhibitions </Link> </li> */}
        {/* <li className={styles.menuListItem}> Viewing Room </li>
        <li className={styles.menuListItem}> News </li>
        <li className={styles.menuListItem}> About </li> */}
        <li className={styles.menuKayemes}>  KAYEMES </li>
      </ul>
      </Link>  
        </div>
    <hr className={styles.line}/>

    <div className={styles.middle}>

    <ul className={styles.imgHeader}> 
          {/* <li className={styles.imgHeaderItem}> <span className={styles.exhibition}> Exhibition </span>    </li> */}
          <li className={styles.imgHeaderItem}><span className={styles.exhibition}> Andrew Christopher Green, Nilo Goldfarb, and Úlfur Loga </span>  </li>
          {/* <li className={styles.imgHeaderItem}> <i>Los Angeles</i>  
           </li> */}
           <li className={styles.imgHeaderItem}> May 6th - June 2nd </li>

           {/* <li className={styles.imgHeaderItem}><Link href="/imgs/JPRelease.pdf"> Press Release </Link></li> */}

           <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>        <br/>
          <br/>
          <br/>
          <br/>
 
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

      </ul>

      <ul className={styles.imgHeaderMobile}> 
          <li className={styles.imgHeaderItem}> Andrew Christopher Green, Nilo Goldfarb, and Úlfur Loga </li>
          {/* <li className={styles.imgHeaderItem}> <i>Los Angeles</i>  
           </li> */}
           <li className={styles.imgHeaderItem}> 
           May 6th - June 2nd  
           </li> <br/>      <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>        <br/>
          <br/>
          <br/>
        
          <br/>
          <br/>

           {/* <li className={styles.imgHeaderItem}><Link href="/imgs/JPRelease.pdf"> Press Release </Link></li> */}

      </ul>


    {/* <div className={styles.imgTile}>
        <img src="/john/1.jpg" className={styles.images}/>
        <img src="/john/3.jpg" className={styles.images}/>
        <img src="/john/8.jpg" className={styles.images}/>
        <img src="/john/10.jpg" className={styles.images}/>
        <img src="/john/9.jpg" className={styles.images}/>
        <img src="/john/2.jpg" className={styles.images}/>

        <img src="/john/4.jpg" className={styles.images}/>

        <img src="/john/5.jpg" className={styles.images}/>
        <img src="/john/6.jpg" className={styles.images}/>
        <img src="/john/7.jpg" className={styles.images}/>

        <img src="/john/11.jpg" className={styles.images}/>
        <img src="/john/12.jpg" className={styles.images}/>
        <img src="/john/13.jpg" className={styles.images}/>
        <img src="/john/14.jpg" className={styles.images}/>
        <img src="/john/15.jpg" className={styles.images}/>

        <p> photography by Ryan Rusiecki </p>
    </div> */}
      
    </div>







    <div className={styles.footer}>
      <div className={styles.footerContact}>
        Contact 
        <hr className={styles.footerLine}/>
        <span className={styles.footerKayemes}> KAYEMES</span> <br/>
        <div className={styles.footerContactText}>
          {/* 508 West 26th Street <br/>
          Ground Floor & 8th Floor <br/>
          Bushwick, NY 10001 <br/>
          <br/>
        (212) 463-7770 <br/>
        Email */}
        Hancock Street <br/>
        DM For Address   <br/>
        <br/><br/>
        ©2022–
        <br/><br/><br/>
        </div>


      </div>
      <div className={styles.footerFollow}>
          Follow 
        <hr className={styles.footerLine}/>
        <div className={styles.footerContactText}>
        <Link href="https://www.instagram.com/kayemes_app/"> Instagram </Link> <br/><br/><br/><br/>
          </div>
      </div>
      <div className={styles.footerHours}>
          Hours 
        <hr className={styles.footerLine}/>
        <div className={styles.footerContactText}>
        By Appointment <br/>
        {/* 10AM–6PM   <br/> <br/> <br/>
        To ensure the health and safety of our visitors and staff, 
        we ask all visitors to wear a mask and adhere to social distancing requirements. */}
        <br/>  <br/>
        <b> Powered by Synge</b> <img src="imgs/sponge.png"  className={styles.sponge}/>

          </div>
      </div>
    </div>

    <div className={mobileMenu}>
        <ul className={styles.mobileMenuList}>
          {/* <li className={styles.mobileMenuListItem}> Artists </li> */}
          {/* <li className={styles.mobileMenuListItem}> <Link href="/exhibitions"> Exhibitions </Link> </li> */}
          {/* <li className={styles.mobileMenuListItem}> Viewing Room </li>
          <li className={styles.mobileMenuListItem}> News </li>
          <li className={styles.mobileMenuListItem}> About </li> */}
        </ul>
      </div>
    </div>
  )
}
