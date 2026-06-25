import axios from 'axios';


const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor for Request
apiClient.interceptors.request.use(
    (config) => {
        // You can add authorization tokens here if needed
        // const token = localStorage.getItem('token');
        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor for Response
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle global errors, e.g., 401 Unauthorized
        if (error.response && error.response.status === 401) {
            // Redirect to login or refresh token
        }
        return Promise.reject(error);
    }
);

export const checkApiConnection = async (healthCheckEndpoint = '/health'): Promise<boolean> => {
    try {
        const response = await apiClient.get(healthCheckEndpoint);
        return response.status >= 200 && response.status < 300;
    } catch (error) {
        console.error('API Connection Error:', error);
        return false;
    }
};

export default apiClient;
