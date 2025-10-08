import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag, LayoutDashboard } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MicroShop
            </span>
          </div>
          
          <div className="flex gap-2">
            <Link to="/shop">
              <Button
                variant={location.pathname === '/shop' ? 'default' : 'ghost'}
                className={location.pathname === '/shop' ? 'bg-gradient-to-r from-primary to-secondary' : ''}
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                Shop
              </Button>
            </Link>
            <Link to="/admin">
              <Button
                variant={location.pathname === '/admin' ? 'default' : 'ghost'}
                className={location.pathname === '/admin' ? 'bg-gradient-to-r from-primary to-secondary' : ''}
              >
                <LayoutDashboard className="w-4 h-4 mr-2" />
                Admin
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
