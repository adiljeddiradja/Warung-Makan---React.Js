import axiosInstance from '@/api/axiosInstance';

const CustomerServices = () => {
    const create = async (payload) => {
        const { data } = await axiosInstance.post('/customer', payload);
        return data;
    }

    const getAll = async (query) => {
        const { data } = await axiosInstance.get(`/customer`, { params: query });
        return data;
    }

    const getById = async (id) => {
        const { data } = await axiosInstance.get(`/customer/${id}`);
        return data;
    }

    const update = async (payload) => {
        const { data } = await axiosInstance.put('/customer', payload);
        return data;
    }

    const deleteById = async (id) => {
        const { data } = await axiosInstance.delete(`/customer/${id}`);
        return data;
    }

    return {
        create,
        getAll,
        getById,
        update,
        deleteById,
    }
}

export default CustomerServices;