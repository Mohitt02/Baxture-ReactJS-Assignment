"use client";

import { Avatar, Text, Button, Paper, SimpleGrid, Group, Tooltip, Anchor } from '@mantine/core';
// import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import { IconPhoneCall, IconAt, IconWorld, IconTrash, IconUserPlus, IconUserMinus } from '@tabler/icons-react';
// import classes from './UserInfoIcons.module.css';
import { useCallback, useEffect, useState } from 'react';
import axios from "axios";
import People from './People';

export default function HomePage() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("https://jsonplaceholder.typicode.com/users");
        setUsers(result.data);
      } catch (error) {
        // handle any GET request or response handling errors
      }
    };
    fetchData();

  }, []);

  return (
    <>
      <div >
        <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} p="lg">
          {users.map((user) => {
            return (
              <People user={user} users={users} setUsers={setUsers} />
            )
          })}
        </SimpleGrid>
      </div>
    </>
  );
}
