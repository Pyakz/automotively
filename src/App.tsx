import Pagination from './components/Pagination';
import Nav from './modules/nav/Nav';
import { useStore } from './stores/useStore';
import VehicleList from './modules/vehicles/VehicleList';
import { Route, Routes } from 'react-router-dom';
import VehicleDetails from './modules/vehicles/details/VehicleDetails';

function App() {
  const { store, setFilters, lastPage } = useStore();

  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Nav />
            <VehicleList />
            <Pagination
              onPageChange={(page: number) => setFilters({ ...store, page })}
              pageRange={1}
              currentPage={store?.page || 1}
              lastPage={lastPage(store)}
              className='justify-end'
            />
            <footer className='container text-center mx-auto pb-3'>
              <a href='https://www.banguismv.live' target='_blank' className='text-slate-700'>
                &copy; Mark Vergel Banguis
              </a>
            </footer>
          </>
        }
      />
      <Route path='/vehicles/:vin' element={<VehicleDetails />} />
    </Routes>
  );
}

export default App;
