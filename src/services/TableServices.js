import axiosInstance from '@/api/axiosInstance';

const TableServices = () => {
    const create = async (payload) => {
        const { data } = await axiosInstance.post('/table', payload);
        return data;
    }

    const getAll = async (query) => {
        const { data } = await axiosInstance.get(`/table`, { params: query });
        return data;
    }

    const getById = async (id) => {
        const { data } = await axiosInstance.get(`/table/${id}`);
        return data;
    }

    const update = async (payload) => {
        const { data } = await axiosInstance.put('/table', payload);
        return data;
    }

    const deleteById = async (id) => {
        const { data } = await axiosInstance.delete(`/table/${id}`);
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

export default TableServices;