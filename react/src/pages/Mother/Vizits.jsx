import { useGetMotherVizitsQuery, useDeleteMotherVizitMutation } from "@api/motherVizitsApi";
import Header from "@components/Header";
import Loading from "@components/Loading";
import TableItemDate from "@components/table/TableItemDate";

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

    return (
        <div className="container">
            <Header title="Mother vizits" />

            <main className="main">

                <div className="section">
                    <div className="section__col col-6">

                        <Loading isLoading={isLoading} />

                        <ul>
                            {data.vizits?.map((vizit) => (

                                <li key={vizit.id} className="table-row">

                                    <p className="table-row__date"      >
                                        { formateDate(vizit.created_at) }
                                    </p>  

                                    <p className="table-row__title"      >
                                        {vizit.description}
                                    </p>   
                                </li>                            
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>        
    )
}