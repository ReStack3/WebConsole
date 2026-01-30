'use client';

import { useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { CloudArrowDownIcon,Squares2X2Icon,CodeBracketIcon,ClockIcon,Cog6ToothIcon,EyeIcon,BoltIcon,HomeIcon,ChartBarIcon, CubeIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
  children?: ReactNode;
}

const menuItems = [
  {name:"首页",path:"/",icon:<HomeIcon className="w-6 h-6 text-white" />},
  { name: '爬虫', path: '/crawler', icon: <CloudArrowDownIcon className="w-6 h-6" /> },
  { name: '天眼', path: '/observer', icon: <EyeIcon className="w-6 h-6" /> },
  { name: '链哨', path: '/sentinel', icon: <BoltIcon className="w-6 h-6" /> },
  { name: '量化', path: '/quent', icon: <ChartBarIcon className="w-6 h-6" /> },
  { name: '其他', path: '/others', icon: <Squares2X2Icon className="w-6 h-6" /> },
];


export default function Sidebar({ children }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => setOpen(!open);
  const handleNavigate = (path: string) => router.push(path);

  return (
    <div className="flex h-screen">
      {/* 箭头按钮，固定在左侧 */}
      {!open && (
        <button
          onClick={toggleSidebar}
          className="fixed top-1/2 left-0 -translate-y-1/2 w-6 h-12
          bg-gray-700 hover:bg-gray-600 text-white flex items-center justify-center rounded-r-md z-50"
          aria-label="展开侧边栏"
        >
          {'>'}
        </button>
      )}

      {/* 侧边栏 */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-800 text-white
        transition-all duration-300 overflow-hidden ${open ? 'w-48' : 'w-0'}`}
      >
        {/* 展开状态下的收起按钮 */}
        {open && (
          <button
            onClick={toggleSidebar}
            className="absolute top-1/2 right-0 -translate-y-1/2 w-6 h-12
            bg-gray-700 hover:bg-gray-600 text-white flex items-center justify-center rounded-l-md"
            aria-label="收起侧边栏"
          >
            {'<'}
          </button>
        )}

        {/* 菜单列表 */}
        {open && (
          <ul className="flex flex-col mt-10 space-y-4 pl-4">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="flex items-center px-2 cursor-pointer hover:bg-gray-700 rounded h-10"
                tabIndex={0}
                onClick={() => handleNavigate(item.path)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') handleNavigate(item.path);
                }}
              >
                
                {item.icon}
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 右侧页面内容 */}
      <div className={`flex-1 ml-0 transition-all duration-300 ${open ? 'ml-48' : 'ml-0'}`}>
        {children}
      </div>
    </div>
  );
}
