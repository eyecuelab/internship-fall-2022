import '../../index.css';
import { Header } from './styles';
import CardTemplate from '../../Components/CardTemplate/CardTemplate';
import ModLogin from '../../Components/ModLogin/ModLogin';

const ModControl = () => {

  if (true) { 
    return (
      <>
        <Header><h4>Eyecue Haicue</h4></Header>
        <ModLogin />
      </>
    ); 
  } else { 
    return ( 
      <>
        <CardTemplate />
      </>
    ); 
  }
}

export default ModControl