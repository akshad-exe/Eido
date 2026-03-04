import { apiClient } from '../config';
import { mockDashboardSummary, mockActivityLogs } from '../mockData';
import type { DashboardSummary, ActivityLog } from '../types';

export const DashboardAPI = {
    async getSummary(): Promise<DashboardSummary> {
        try {
            const response = await apiClient.get<DashboardSummary>('/api/dashboard/summary');
            return response.data;
        } catch (err) {
            console.warn('[DashboardAPI] Backend unavailable, using mock data', err);
            return mockDashboardSummary;
        }
    },

    async getRecentActivity(): Promise<ActivityLog[]> {
        try {
            const response = await apiClient.get<ActivityLog[]>('/api/dashboard/activity');
            return response.data;
        } catch (err) {
            console.warn('[DashboardAPI] Backend unavailable, using mock activity', err);
            return mockActivityLogs;
        }
    }
};
