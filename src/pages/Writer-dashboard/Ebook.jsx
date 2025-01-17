import React, { useState } from 'react';
import {
  Button, Input, Card, Tabs, Tab, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
  Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Tooltip, Chip
} from '@nextui-org/react';
import { Eye, Trash2, Pencil, Plus, BookOpen, DollarSign, Users } from 'lucide-react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip as ChartTooltip, Legend } from 'chart.js';

import { useNavigate } from 'react-router-dom'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, ChartTooltip, Legend);

const statusColorMap = {
  Available: "success",
  Unavailable: "danger",
};

const Ebook = () => {

  const navigate = useNavigate()

  const [selectedTab, setSelectedTab] = useState('Listed');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(new Set(["all"]));

  const selectedCategoryValue = React.useMemo(
    () => Array.from(selectedCategory).join(", ").replaceAll("_", " "),
    [selectedCategory]
  );

  const ebooks = [
    { key: "1", title: 'E Book Title 1', status: 'Available', sales: '250', },
    { key: "2", title: 'E Book Title 2', status: 'Unavailable', sales: '1250', },
    { key: "3", title: 'E Book Title 3', status: 'Available', sales: '30', },
  ];

  const ebooks2 = [
    { key: "1", title: 'E Book Title 1', comment: 'Needs revision', },
    { key: "2", title: 'E Book Title 2', comment: 'Copyright issues', },
    { key: "3", title: 'E Book Title 3', comment: 'Inappropriate content', },
  ];

  const columns = [
    { key: "title", label: "Title" },
    { key: "status", label: "Status" },
    { key: "sales", label: "Sales" },
    { key: "action", label: "Action" },
  ];

  const columns2 = [
    { key: "title", label: "Title" },
    { key: "comment", label: "Comments" },
    { key: "action", label: "Action" },
  ];

  const renderCell = (ebook, columnKey) => {
    const cellValue = ebook[columnKey];

    switch (columnKey) {
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[ebook.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "action":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Eye />
              </span>
            </Tooltip>
            <Tooltip content="Edit">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Pencil />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <Trash2 />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  };

  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const readerData = {
    labels: ['E Book 1', 'E Book 2', 'E Book 3', 'E Book 4', 'E Book 5'],
    datasets: [
      {
        label: 'Readers',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }
    ]
  };

  return (
    <div className="min-h-screen bg-foreground-100 p-2">
      <Card className="p-6 bg-white dark:bg-gray-800 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">E Books</h1>
          <Button color="primary" startContent={<Plus />} className="ml-auto" onClick={() => navigate('/author/ebooks/add')}>
            Add an Ebook
          </Button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 bg-blue-100 dark:bg-blue-900">
            <div className="flex items-center">
              <BookOpen className="w-8 h-8 text-blue-500 dark:text-blue-300 mr-2" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Ebooks</p>
                <p className="text-xl font-bold text-gray-800 dark:text-white">120</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-green-100 dark:bg-green-900">
            <div className="flex items-center">
              <DollarSign className="w-8 h-8 text-green-500 dark:text-green-300 mr-2" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Sales</p>
                <p className="text-xl font-bold text-gray-800 dark:text-white">$15,240</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-purple-100 dark:bg-purple-900">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-purple-500 dark:text-purple-300 mr-2" />
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Readers</p>
                <p className="text-xl font-bold text-gray-800 dark:text-white">5,420</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card className="p-4 bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Monthly Sales</h2>
            <Line data={salesData} />
          </Card>
          <Card className="p-4 bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Readers per Ebook</h2>
            <Bar data={readerData} />
          </Card>
        </div>

        <Tabs aria-label="Ebook Tabs" value={selectedTab} onValueChange={setSelectedTab}>
          <Tab key="Listed" title="Listed">
            <Card className="px-6 py-4 bg-white dark:bg-gray-800 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">E Books on sale</h2>
                <div className="flex items-center">
                  <Input
                    clearable
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 mr-2"
                  />
                  <Dropdown>
                    <DropdownTrigger>
                      <Button variant="bordered" className="capitalize">
                        {selectedCategoryValue}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Category selection"
                      variant="flat"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={selectedCategory}
                      onSelectionChange={setSelectedCategory}
                    >
                      <DropdownItem key="all">All</DropdownItem>
                      <DropdownItem key="Novel">Novel</DropdownItem>
                      <DropdownItem key="Short Story">Short Story</DropdownItem>
                      <DropdownItem key="Poem & Nisadas">Poem & Nisadas</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>

              <Table aria-label="Ebook Table">
                <TableHeader columns={columns}>
                  {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={ebooks}>
                  {(item) => (
                    <TableRow key={item.key}>
                      {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Card>
          </Tab>
          <Tab key="Pending" title="Pending">
            <Card className="px-6 py-4 bg-white dark:bg-gray-800 shadow-sm">
              <Table aria-label="Pending Ebooks Table">
                <TableHeader>
                  <TableColumn>Title</TableColumn>
                  <TableColumn>Date</TableColumn>
                  <TableColumn>Actions</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"No pending ebooks."}>{[]}</TableBody>
              </Table>
            </Card>
          </Tab>
          <Tab key="Declined" title="Declined">
            <Card className="px-6 py-4 bg-white dark:bg-gray-800 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Declined E Books</h2>
                <div className="flex items-center">
                  <Input
                    clearable
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 mr-2"
                  />
                  <Dropdown>
                    <DropdownTrigger>
                      <Button variant="bordered" className="capitalize">
                        {selectedCategoryValue}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Category selection"
                      variant="flat"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={selectedCategory}
                      onSelectionChange={setSelectedCategory}
                    >
                      <DropdownItem key="all">All</DropdownItem>
                      <DropdownItem key="Novel">Novel</DropdownItem>
                      <DropdownItem key="Short Story">Short Story</DropdownItem>
                      <DropdownItem key="Poem & Nisadas">Poem & Nisadas</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>

              <Table aria-label="Declined Ebook Table">
                <TableHeader columns={columns2}>
                  {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={ebooks2}>
                  {(item) => (
                    <TableRow key={item.key}>
                      {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Card>
          </Tab>
        </Tabs>
      </Card>
    </div>
  );
};

export default Ebook;