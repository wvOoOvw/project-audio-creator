import React from 'react'

import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'

import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import DeleteIcon from '@mui/icons-material/Delete'

import Imitation from './utils.imitation'
import { hash } from './utils.common'
import { TextFieldSX } from './utils.mui.sx'

import Animation from './View.Component.Animation'

function ConsoleSource(props) {
  const style = {
    width: `${props.source.duration / props.maxTime * 100}%`,
    height: 40,
    position: 'absolute',
    left: `${props.source.when / props.maxTime * 100}%`,
    top: 40,
    transition: '0.5s all',
    fontSize: 12,
  }

  return <Button variant='contained' style={style}>{props.source.id}</Button>
}

function Console() {
  const [dragEnter, setDragEnter] = React.useState(false)

  const onDragEnter = () => {
    setDragEnter(true)
  }

  const onDragLeave = () => {
    setDragEnter(false)
  }

  const onDragOver = (e) => {
    e.preventDefault()
  }

  const onDrop = (e) => {
    const dragTarget = Imitation.state.dragTarget

    const item = { id: dragTarget.id, use: true, volume: dragTarget.volume, when: dragTarget.when, offset: dragTarget.offset, duration: dragTarget.duration, rate: dragTarget.rate }

    Imitation.setState(pre => { pre.consoleCurrent.group.push(item); return pre })

    setDragEnter(false)
  }

  const drag = { onDragEnter, onDragLeave, onDragOver, onDrop }

  const maxTime = Imitation.state.consoleCurrent ? Math.max(...Imitation.state.consoleCurrent.group.map((i) => i.when + i.duration)) : 0

  React.useEffect(() => {

  }, [Imitation.state.console])

  console.log(Imitation.state.consoleCurrent)

  return <div style={{ width: '100%', height: '100%', display: 'flex' }}>

    <div style={{ height: '100%', flexGrow: 0, flexShrink: 0, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
      <Button style={{ margin: '4px 0' }} fullWidth variant='contained'><PlayArrowIcon /></Button>
      <Button style={{ margin: '4px 0' }} fullWidth variant='contained'><PauseIcon /></Button>
      <Button style={{ margin: '4px 0' }} fullWidth variant='contained' onClick={() => Imitation.setState(pre => { pre.console.push({ id: hash(6), name: hash(6), group: [] }); pre.consoleCurrent = pre.console[0]; return pre })}><PlaylistAddIcon /></Button>
      {
        Imitation.state.consoleCurrent ?
          <Button style={{ margin: '4px 0' }} fullWidth variant='contained' onClick={() => Imitation.setState(pre => { pre.console = pre.console.filter(i => i !== pre.consoleCurrent); pre.consoleCurrent = null; return pre })}><DeleteIcon /></Button>
          : null
      }
    </div>

    <Divider style={{ margin: '0 8px' }} orientation='vertical' />

    <div style={{ height: '100%', flexGrow: 0, flexShrink: 0, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
      {
        Imitation.state.console.map((i, index) => {
          return <Button key={i.id} style={{ margin: '4px 0', textAlign: 'left' }} fullWidth variant={i === Imitation.state.consoleCurrent ? 'contained' : 'outlined'} onClick={() => Imitation.setState(pre => { pre.consoleCurrent = i; return pre })}>{i.name}</Button>
        })
      }
    </div>

    {
      Imitation.state.console.length > 0 ? <Divider style={{ margin: '0 8px' }} orientation='vertical' /> : null
    }

    <div style={{ height: '100%', flexGrow: 1, flexShrink: 0, overflow: 'auto', position: 'relative', borderRadius: 12, transition: '0.5s all', background: dragEnter ? `${Imitation.state.theme.palette.primary.main}66` : '' }} {...drag}>

      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <div style={{ width: '100%', height: 2, position: 'absolute', top: 0, bottom: 0, margin: 'auto', background: Imitation.state.theme.palette.primary.main }}></div>

        <div style={{ width: '100%', height: '100%', position: 'absolute', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {
            new Array(101).fill().map((i, index) => {
              if (index % 10 === 0) {
                return <div key={index} style={{ width: 2, height: '4%', background: Imitation.state.theme.palette.primary.main, transition: '0.5s all' }}></div>
              }
              if (index % 5 === 0) {
                return <div key={index} style={{ width: 2, height: '3%', background: Imitation.state.theme.palette.primary.main, transition: '0.5s all' }}></div>
              }
              if (index % 10 !== 0 && index % 5 !== 0) {
                return <div key={index} style={{ width: 2, height: '2%', background: Imitation.state.theme.palette.primary.main, transition: '0.5s all' }}></div>
              }
            })
          }
        </div>
      </div>

      {
        Imitation.state.consoleCurrent ?
          <div style={{ width: '100%', height: '100%', position: 'absolute', overflow: 'auto' }}>
            {
              Imitation.state.consoleCurrent.group.map((i, index) => {
                return <ConsoleSource key={i.id} source={i} maxTime={maxTime} />
              })
            }
          </div>
          : null
      }

    </div>

  </div>
}

function App() {
  const expand = () => Imitation.setState(pre => { pre.consoleExpand = !pre.consoleExpand; return pre })

  return <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

    <div style={{ position: 'relative', margin: 'auto', width: 'calc(100% - 32px)', height: Imitation.state.consoleExpand ? 300 : 0, marginBottom: Imitation.state.consoleExpand ? 16 : 0, boxShadow: '0 4px 8px gray', borderRadius: 12, overflow: 'hidden', opacity: Imitation.state.consoleExpand ? 1 : 0, transition: '0.5s all' }}>
      <div style={{ position: 'absolute', width: '100%', height: 300, bottom: 0, left: 0, padding: 16 }}>
        <Console />
      </div>
    </div>

    <Animation tag={Button} restore={true} animation={[{ opacity: 0 }, { opacity: 1 }]} style={{ width: 'fit-content', marginBottom: 16, transition: '0.5s all' }} variant='contained' onClick={() => expand()}>Expand Console</Animation>

  </div>
}

export default App