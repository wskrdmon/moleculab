import { useSearchParams } from 'react-router-dom';
import Catalog from '../components/Catalog';

function MoleculesPage() {
  const [searchParams] = useSearchParams();
  const categoriaId = searchParams.get('categoria');

  return <Catalog categoriaId={categoriaId} />;
}

export default MoleculesPage;