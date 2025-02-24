import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';

function UpdateOrder({order}) {
    const fetcher = useFetcher()
    
    return (
      <fetcher.Form method='PATCH' className='text-right'>
        <Button type="primary">Make Proirity</Button>
      </fetcher.Form>
    );
}

export default UpdateOrder

export async function action({request, params}) {
    const order = await updateOrder(params.orderId, {priority: true});
    return {order};
} 