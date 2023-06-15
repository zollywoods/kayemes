import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/luke.module.css'
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
          <li className={styles.imgHeaderItem}><span className={styles.exhibition}> Luke Herrigel and Zaid Milefchik </span>  </li>
          <li className={styles.imgHeaderItem}> <i>Bonding</i>  
           </li>
           <li className={styles.imgHeaderItem}> March 2023 </li>

           <li className={styles.imgHeaderItem}><Link href="/imgs/bonding.pdf"> Press Release </Link></li>
      </ul>


      <ul className={styles.imgHeaderMobile}> 
          <li className={styles.imgHeaderItem}> Luke Herrigel and Zaid Milefchik</li>
          <li className={styles.imgHeaderItem}> <i>Bonding</i>  
           </li>
           <li className={styles.imgHeaderItem}> 
              March 2023  
           </li> <br/>
           <li className={styles.imgHeaderItem}><Link href="/imgs/bonding.pdf"> Press Release </Link></li>

      </ul>


    <div className={styles.imgTile}>
        <img src="/lukeandzaid/general.jpg" title="Zaid Milefchik and Luke Herrigel" alt="Zaid Milefchik and Luke Herrigel" className={styles.images}/>
        <img src="/lukeandzaid/26.jpg" className={styles.images}/>
        <img src="/lukeandzaid/18.jpg" className={styles.images}/>
        <img src="/lukeandzaid/17.jpg" className={styles.images}/>

        <img src="/lukeandzaid/19.jpg" className={styles.images}/>

        <img src="/lukeandzaid/12.jpg" className={styles.images}/>
        <img src="/lukeandzaid/15.jpg" className={styles.images}/>
        <img src="/lukeandzaid/350.jpg" className={styles.images}/>
        <img src="/lukeandzaid/IMG_8607.jpeg" className={styles.images}/>

        <img src="/lukeandzaid/13.jpeg" className={styles.images}/>

        <img src="/lukeandzaid/22.jpg" className={styles.images}/>

        <img src="/lukeandzaid/25.jpg" className={styles.images}/>
        <img src="/lukeandzaid/23.jpg" className={styles.images}/>
        <img src="/lukeandzaid/24.jpg" className={styles.images}/>

        <img src="/lukeandzaid/16.jpg" className={styles.images}/>
        <img src="/lukeandzaid/351.jpeg" className={styles.images}/>
        {/* <img src="/lukeandzaid/5000.jpg" className={styles.images}/> */}
        <img src="/lukeandzaid/27.jpg" alt="zaid milefchik"className={styles.images}/>
        <img src="/lukeandzaid/311.jpeg" alt="zaid milefchik" className={styles.images}/>

        {/* <img src="/lukeandzaid/200.jpeg" className={styles.images}/>
        <img src="/lukeandzaid/311.jpeg" className={styles.images}/> */}

        <div className={styles.blockPairing}> 
          <img src="/lukeandzaid/block4_h.jpg" className={styles.blockImgs}/>
          <img src="/lukeandzaid/block1_b.jpg" className={styles.blockImgs}/>
        </div>
        <div className={styles.blockPairing}> 
          <img src="/lukeandzaid/block3_h.jpg" className={styles.blockImgs}/>
          <img src="/lukeandzaid/block2_b.jpg" className={styles.blockImgs}/>
        </div>
        <div className={styles.blockPairing}> 
          <img src="/lukeandzaid/block2_h.jpg" className={styles.blockImgs}/>
          <img src="/lukeandzaid/block3_b.jpg" className={styles.blockImgs}/>
        </div>
        <div className={styles.blockPairing}> 
          <img src="/lukeandzaid/block1_h.jpg "  alt="zaid milefchik"  className={styles.blockImgs}/>
          <img src="/lukeandzaid/block4_b.jpg"  alt="zaid milefchik"  className={styles.blockImgs}/>
        </div>

        <div className={styles.blockPairing}> 
          <img src="/lukeandzaid/color1_h.jpg" className={styles.blockImgs}/>
          <img src="/lukeandzaid/color1_b.jpg" className={styles.blockImgs}/>
        </div>
        <div className={styles.blockPairing}> 
          <img src="/lukeandzaid/color2_h.jpg"  alt="zaid milefchik" className={styles.blockImgs}/>
          <img src="/lukeandzaid/color2_b.jpg" alt="zaid milefchik"   className={styles.blockImgs}/>
        </div>

        <div className={styles.blockPairing}> 
          <img src="/lukeandzaid/heath2.jpg" className={styles.heathImgs}/>
          <img src="/lukeandzaid/heath1.jpg" className={styles.heathImgs}/>
        </div>




        <p> photography by Ryan Rusiecki </p>
    </div>
      
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
          Links 
        <hr className={styles.footerLine}/>
        <div className={styles.footerContactText}>
        <Link href="https://www.instagram.com/kayemes_app/"> Instagram </Link> <br/>  <br/>
        <b> <Link href="https://kayemesprogram.blogspot.com/"> Screenings / Programming </Link> <a href="https://kayemesprogram.blogspot.com/"> <img src="imgs/kms.jpg"  href="https://kayemesprogram.blogspot.com/" className={styles.kms}/>  </a></b> <br/><br/><br/>
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
    </div>
  )
}
