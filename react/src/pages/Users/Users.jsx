import { useGetUsersQuery, useDeleteUserMutation } from "@api/usersApi";
import TableItem from "@components/table/TableItem";
import Header from "@components/Header";
import Loading from "@components/Loading";

export default function Users() {
    const { data = [], isLoading } = useGetUsersQuery();

    return (
        <div className="container">
            <Header title="Users" />

            <main className="main">
                <div className="section">
                    <div className="section__col col-6">
                        <Loading isLoading={isLoading} />

                        <ul>
                            {data.users?.map((user) => (   
                                <TableItem
                                    key={user.id}
                                    item={{id: user.id, title: user.name}}
                                    object="users"
                                    deleteMutation={useDeleteUserMutation}
                                />                              
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}

