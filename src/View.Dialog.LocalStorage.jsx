import React from 'react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Grid from '@mui/material/Grid'

import Imitation from './utils.imitation'

function App() {
  const [ifLocalStorage, setIfLocalStorage] = React.useState()

  const close = () => {
    Imitation.assignState({ dialogLocalStorage: null })
  }

  const save = () => {
    localStorage.setItem('audioSetting', JSON.stringify(Imitation.state.audioSetting))
    localStorage.setItem('console', JSON.stringify(Imitation.state.console))

    Imitation.state.message = 'Save'

    Imitation.dispatch()
  }

  const load = () => {
    if (localStorage.getItem('audioSetting')) Imitation.state.audioSetting = JSON.parse(localStorage.getItem('audioSetting'))
    if (localStorage.getItem('console')) Imitation.state.console = JSON.parse(localStorage.getItem('console'))
    Imitation.state.consoleCurrent = null
    Imitation.state.message = 'Load'

    Imitation.dispatch()
  }

  const copy = () => {
    const r = {
      audioSetting: Imitation.state.audioSetting,
      console: Imitation.state.console,
    }

    navigator.clipboard.writeText(JSON.stringify(r)).then(res => Imitation.assignState({ message: 'Copy' }))
  }

  const copy_console = () => {
    const r = Imitation.state.console

    navigator.clipboard.writeText(JSON.stringify(r)).then(res => Imitation.assignState({ message: 'Copy' }))
  }

  React.useEffect(() => {
    if (Imitation.state.dialogLocalStorage !== null) {

    }
  }, [Imitation.state.dialogLocalStorage])

  return <Dialog open={Imitation.state.dialogLocalStorage !== null} sx={{ '& .MuiDialog-paper': { width: '100%', maxWidth: 720 } }} onClose={() => close()}>
    <DialogTitle style={{ fontSize: 16 }}>LocalStorage</DialogTitle>
    <DialogContent dividers style={{ fontSize: 14 }}>
      <Grid container spacing={1}>

        <Grid item xs={12} style={{ marginBottom: 8 }}>
          Save current data into local OR Load local data into app
        </Grid>

      </Grid>
    </DialogContent>
    <DialogActions>
      <Button variant='contained' onClick={() => copy_console()}>Copy Console</Button>
      <Button variant='contained' onClick={() => copy()}>Copy</Button>
      <Button variant='contained' onClick={() => save()}>Save</Button>
      <Button variant='contained' onClick={() => load()}>Load</Button>
    </DialogActions>
  </Dialog >
}

export default Imitation.withBindRender(App, state => [state.dialogLocalStorage])