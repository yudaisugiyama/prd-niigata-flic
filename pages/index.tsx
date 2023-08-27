import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min'
import home from '../styles/Home.module.css'

const Home = () => {
  const vantaRef = useRef(null)

  useEffect(() => {
    const vantaEffect = GLOBE({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x0000ff,
      color2: 0x00b300,
      backgroundColor: 0xc2c2ff
    })

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [])

  return (
    <>
    <div
      style={{
        height: '100vh',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -30,
      }}
      ref={vantaRef}
    />
    <div className={home.container}>
      <h1>Niigata Money Literacy</h1>
      <p>NGT金融リテラシー向上委員会</p>
    </div>
    </>
  )
}

export default Home