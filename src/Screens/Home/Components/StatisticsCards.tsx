import React, { useState, useEffect } from 'react';
import { Text, Box } from 'native-base';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ApiHelper } from "@/Helper/AxiosHelper";

interface EmploymentItem {
  code: string;
  display: string;
  description: string;
  total: number;
  percentage: number;
}

interface OrganizationItem {
  code: string;
  display: string;
  description: string;
  total: number;
  percentage: number;
}

interface DashboardResponse {
  employmentStatus: {
    items: EmploymentItem[];
    summary: {
      totalPeople: number;
      employmentRate: number;
      unemploymentRate: number;
      inactiveRate: number;
    };
  };
  organizationStatus: {
    items: OrganizationItem[];
    summary: {
      totalOrganizations: number;
      activeRate: number;
      inactiveRate: number;
    };
  };
}

export const StatisticsCards = () => {
  const [activeTab, setActiveTab] = useState('labor');
  const [employmentData, setEmploymentData] = useState<EmploymentItem[]>([]);
  const [organizationData, setOrganizationData] = useState<OrganizationItem[]>([]);
  const [inactiveTotal, setInactiveTotal] = useState(0);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await ApiHelper.get('/dashboard');
        console.log(response.data);
        const data = response.data as {
          employmentStatus: {
            items: any[];
            summary: {
              totalPeople: number;
            };
          };
          organizationStatus: {
            items: any[];
          };
        };
        setEmploymentData(data.employmentStatus.items as never[]);
        setOrganizationData(data.organizationStatus.items as never[]);
        setInactiveTotal(data.employmentStatus.summary.totalPeople);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderContent = () => {
    if (activeTab === 'labor') {
      const employed = employmentData.find(item => item.code === 'EMPLOYED');
      const unemployed = employmentData.find(item => item.code === 'UNEMPLOYED');
      
      return (
        <>
          <Box style={[styles.card, { backgroundColor: '#2196F3' }]}>
            <Text color="white" fontSize="lg" fontWeight="bold">Có việc làm</Text>
            <Text color="white" fontSize="xl">{employed?.total || 0} người</Text>
          </Box>
          <Box style={[styles.card, { backgroundColor: '#009688' }]}>
            <Text color="white" fontSize="lg" fontWeight="bold">Thất nghiệp</Text>
            <Text color="white" fontSize="xl">{unemployed?.total || 0} người</Text>
          </Box>
        </>
      );
    }

    const active = organizationData.find(item => item.code === 'ACTIVE');
    const inactive = organizationData.find(item => item.code === 'INACTIVE');
    
    return (
      <>
        <Box style={[styles.card, { backgroundColor: '#2196F3' }]}>
          <Text color="white" fontSize="lg" fontWeight="bold">Đang hoạt động</Text>
          <Text color="white" fontSize="xl">{active?.total || 0} tổ chức</Text>
        </Box>
        <Box style={[styles.card, { backgroundColor: '#009688' }]}>
          <Text color="white" fontSize="lg" fontWeight="bold">Ngưng hoạt động</Text>
          <Text color="white" fontSize="xl">{inactive?.total || 0} tổ chức</Text>
        </Box>
      </>
    );
  };

  return (
    <Box p={4}>
      <View style={styles.tabs}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'labor' && styles.activeTab]} 
          onPress={() => setActiveTab('labor')}
        >
          <Text color={activeTab === 'labor' ? '#2196F3' : '#666'}>Cung lao động</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'organization' && styles.activeTab]}
          onPress={() => setActiveTab('organization')}
        >
          <Text color={activeTab === 'organization' ? '#2196F3' : '#666'}>Cầu lao động</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {renderContent()}
      </View>
      
      <Box style={[styles.card, { backgroundColor: '#9E9E9E', marginTop: 12 }]}>
        <Text color="white" fontSize="lg" fontWeight="bold">
          {activeTab === 'labor' ? 'Không tham gia hoạt động kinh tế' : 'Tổng số tổ chức'}
        </Text>
        <Text color="white" fontSize="xl">
          {activeTab === 'labor' 
            ? `${employmentData.find(item => item.code === 'INACTIVE')?.total || 0} người`
            : `${organizationData.find(item => item.code === 'TOTAL')?.total || 0} tổ chức`}
        </Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  card: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: 'white',
  },
});