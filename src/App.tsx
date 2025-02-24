import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../@/components/ui/dialog';
import './App.css';

function App() {
  return (
    <div
      style={{
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: '2rem',
        height: '100vh',
        width: '100vw',
      }}
    >
      <h1 style={{ color: 'white', fontSize: '2rem' }}>SHADCN TEST Y'ALL</h1>
      <h4 style={{ color: 'white' }}>This is it. The site is done.</h4>
      <h5 style={{ color: 'white' }}>JK. Coming soon.</h5>
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
