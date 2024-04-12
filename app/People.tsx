import React, { useCallback, useState, useEffect } from 'react';

// import { IconPhoneCall, IconAt } from '@tabler/icons-react';
import { IconPhoneCall, IconAt, IconWorld, IconTrash, IconUserPlus, IconUserMinus, IconStar, IconUser } from '@tabler/icons-react';
import { Avatar, Text, Button, Paper, SimpleGrid, Group, Tooltip, Anchor } from '@mantine/core';


const People = ({ user, users, setUsers }: { user: any , users:any, setUsers:any}) => {
    const [isFollow, setIsFollow] = useState(false);

    const deleteUser = (id:any) => {
        setUsers(users => users.filter((user)=> user.id != id ))
    }

    function toggleIsFollow(): void {
        setIsFollow(!isFollow);
    }

    return (
        <Paper radius="md" withBorder p="lg" bg="var(--mantine-color-body)">
            <Tooltip
                label="Leanne Graham"
                position="top"
                withArrow
                arrowOffset={30}
            >
                <Avatar
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
                    size={120}
                    radius={120}
                    mx="auto"
                />
            </Tooltip>
            <Text ta="center" fz="lg" fw={500} mt="md">
                <span style={{"marginRight": '5px', "fontWeight":"600"}}>{user.name}</span>
                {isFollow &&
                    <IconStar stroke={1.5} size="1rem"/>
                }
            </Text>

            <Group wrap="nowrap" gap={6} mt={6} fz="md" c="dimmed">
                <IconAt stroke={1.5} size="1rem" />
                <Anchor
                    href={`mailto:${user.email}`}
                    c="dimmed"
                    target='_blank'
                >
                    {user.email}
                </Anchor>
            </Group>

            <Group wrap="nowrap" gap={6} mt={5} fz="md" c="dimmed">
                <IconPhoneCall stroke={1.5} size="1rem" />
                <Anchor
                    href={`tel:${user.phone}`}
                    c="dimmed"
                    target='_blank'
                >
                    {user.phone}
                </Anchor>
            </Group>

            <Group wrap="nowrap" gap={5} mt={5} fz="md" c="dimmed">
                <IconWorld stroke={1.5} size="1rem" />
                <Anchor
                    href={`https://www.${user.website}`}
                    c="dimmed"
                    target='_blank'
                >
                    {user.website}
                </Anchor>
            </Group>


            <SimpleGrid cols={{ base: 2 }} spacing={{ base: '6' }}>
                {isFollow == true ?
                    <>
                        <Button
                            leftSection={
                                <IconUserMinus stroke={1.5} size="1rem" />
                            }
                            variant='outline'
                            color='gray'
                            pl={12} mt="md"
                            onClick={() => toggleIsFollow()}
                        >
                            Unfollow
                        </Button>
                    </> :
                    <>
                        <Button
                            leftSection={
                                <IconUserPlus stroke={1.5} size="1rem" />
                            }
                            pl={12} mt="md"
                            onClick={() => toggleIsFollow()}
                        >
                            Follow
                        </Button>
                    </>
                }
                <Button
                    variant='outline'
                    leftSection={
                        <IconTrash stroke={1.5} size="1rem" />
                    }
                    pl={12} mt="md"
                    onClick={()=>deleteUser(user.id)}
                >
                    Delete
                </Button>
            </SimpleGrid>
        </Paper>
    )
}

export default People