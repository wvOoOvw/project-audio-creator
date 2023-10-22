import React from 'react'

import Animation from './View.Component.Animation'

import Imitation from './utils.imitation'

import { loadAudioBuffer, playAudioBuffer, includesArray } from './utils.common'

import audio from '../audio/index'

function ConsoleButton(props) {
  const { name, codeInclued, codeMain, codeExclude } = props.source

  const playTimeRef = React.useRef()

  const [playTime, setPlayTime] = React.useState(false)

  const [codePress, setCodePress] = React.useState([])

  const play = () => {
    playAudioBuffer(props.source)

    setPlayTime(true)

    clearTimeout(playTimeRef.current)

    playTimeRef.current = setTimeout(() => setPlayTime(false), 500)

    Imitation.setState(pre => { pre.playCount = pre.playCount + 1; return pre })
  }

  const ifPlay = (codePress) => {
    if (codeMain && codeMain.length !== 0 && !codeMain.includes(codePress[codePress.length - 1])) return
    if (codeExclude && codeExclude.length !== 0 && includesArray(codeExclude, codePress)) return
    if (!codeInclued.some(i => includesArray(i, codePress))) return

    play()
  }

  const style = React.useMemo(() => {
    const active = playTime

    const r = {
      display: 'inline-block',
      flexShrink: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      transition: '0.5s all',
      width: 72,
      height: 72,
      margin: 8,
      borderRadius: 12,
      fontWeight: 'bold',
      position: 'relative',
      fontSize: 12,
      boxShadow: '0 4px 8px gray',
      transform: active ? `rotate(${Math.random() < 0.5 ? 45 : -45}deg)` : 'rotate(0)',
    }

    if (name.includes('M') === true) Object.assign(r, { background: active ? 'white' : 'black', color: active ? 'black' : 'white' })
    if (name.includes('M') === false) Object.assign(r, { background: active ? 'black' : 'white', color: active ? 'white' : 'black' })

    return r
  }, [playTime, codePress])

  React.useEffect(() => {
    const event = (e) => {
      const result = codePress.includes(e.code) ? codePress : [...codePress, e.code]
      setCodePress(result)

      ifPlay(result)
    }

    const event_ = (e) => {
      const result = codePress.filter(i => !i.includes(e.code))
      setCodePress(result)
    }

    window.addEventListener('keydown', event)
    window.addEventListener('keyup', event_)

    return () => {
      window.removeEventListener('keydown', event)
      window.removeEventListener('keyup', event_)
    }
  }, [codePress])

  return <div style={style} onMouseDown={play} onTouchStart={play}>{name}</div>
}

function App() {
  const [audioSource, setAudioSource] = React.useState(audio.SimplePiano)

  React.useEffect(async () => {
    Imitation.setState(pre => { pre.loading = pre.loading + 1; return pre })

    const source = await loadAudioBuffer(audio.SimplePiano)

    setAudioSource(source)

    Imitation.setState(pre => { pre.loading = pre.loading - 1; return pre })
  }, [])

  return <Animation tag='div' restore={true} animation={[{ opacity: 0 }, { opacity: 1 }]} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, overflow: 'hidden', transition: '0.5s all' }} >

    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: 1500, height: 1000 }}>
          <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
            <div>
              {
                ['0', '1', '2', '3', '4', '5', '6', '7', '8'].map((i, index) => {
                  return <div key={index} style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                    {
                      audioSource.filter(i_ => i_.name.includes(i)).map((i, index) => <ConsoleButton key={index} source={i} />)
                    }
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>

  </Animation>
}

export default App