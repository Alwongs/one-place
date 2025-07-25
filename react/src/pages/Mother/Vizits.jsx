import { useGetMotherVizitsQuery, useDeleteMotherVizitMutation, useDeleteMotherAllVizitsMutation } from "@api/motherVizitsApi";
import Header from "@components/Header";
import Loading from "@components/Loading";
import TableItemDate from "@components/table/TableItemDate";
import TableActions from "@components/table/TableActions";

function formateDate(laravelDate) {
    const date = new Date(laravelDate);
    return date.toLocaleString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}

export default function Vizits() {
    const { data = [], isLoading, error } = useGetMotherVizitsQuery();
    const [ deleteAll, { isLoading: isTruncating } ] = useDeleteMotherAllVizitsMutation();

    const cleanVisitsHandler = async () => {
        await deleteAll();
        console.log('here')
    }

    return (
        <div className="container">
            <Header title="Mother vizits" />

            <main className="main">

                <div className="section">
                    <div className="section__col col-6">

                        <Loading isLoading={isLoading} />
                        <Loading isLoading={isTruncating} />

                        <div className="btn-block flex-end">
                            <button className="btn btn-red" onClick={cleanVisitsHandler}>Clean</button>
                        </div>

                        <ul>
                            {data.vizits?.map((vizit) => (

                                <li key={vizit.id} className="table-row">

                                    <p className="table-row__date"      >
                                        { formateDate(vizit.created_at) }
                                    </p>  

                                    <p className="table-row__title"      >
                                        {vizit.description}
                                    </p>  

                                    <TableActions
                                        hideEditBtn={true}
                                        itemId={vizit.id}
                                        deleteMutation={useDeleteMotherVizitMutation}
                                        editPath="/"
                                        returnPath={`/mother-vizits`}
                                        template="table"          
                                    />
                                </li>                            
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>        
    )
}