import NavAdmin from '../../components/NavigationBar/navAdmin';
import Jadwal from '../../components/table/jadwal';
import checkLogin from "../../utils/checkLogin";

export default function HomeAdmin () {
  return (
    <>
     {checkLogin() ? null : <Jadwal/>}

    </>
  )
}

