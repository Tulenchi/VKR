<template>
  <div class="navbar bg-primary shadow-sm ">
    <div class="navbar-start">
      <button class="btn btn-ghost btn-secondary h-12 w-12 mr-1" @click="goBack">
          <span class="text-primary-content">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </span>
      </button>
      <NuxtLink :to="{ name: 'index' }">
        <button class="btn btn-ghost btn-secondary h-12 w-12">
          <span class="text-primary-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
              <path d="M12 3L2 12h3v8h5v-6h4v6h5v-8h3L12 3z" />
            </svg>
          </span>
        </button>
      </NuxtLink>
    </div>
    <div class="navbar-center">
      <a class="text-2xl text-primary-content">Карта сервера</a>
    </div>
    <div class="navbar-end text-primary-content">
      <ThemeSwitcher />
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 bg-base-100 min-h-[calc(100vh-4rem)]">
    <div class="col-span-2 bg-neutral rounded-box p-4 shadow-md">
      <div id="network" class="h-full w-full bg-neutral"></div>
    </div>

    <div class="flex flex-col gap-4">
      <div class="bg-neutral p-4 rounded-box shadow">
        <p class="bg-neutral text-neutral-content text-center text-lg font-semibold">Основная информация</p>
      </div>
      <div class="bg-neutral p-6 rounded-box shadow">
        <p>Сервер: {{ currentServer?.server_name || 'Загрузка...' }}</p>
        <p>Кластер: {{ currentServer?.cluster_id?.cluster_name || 'Не указано' }}</p>
        <p>Домены: {{ formatItems(currentServer?.domain_id) }}</p>
        <p>Системы: {{ formatItems(currentServer?.system_id) }}</p>
        <p>Группы: {{ formatItems(currentServer?.group_id) }}</p>
      </div>

      <div class="bg-neutral p-4 rounded-box shadow">
        <p class="text-neutral-content">Нагрузка:</p>
        <div class="bg-neutral-focus p-4 mt-3 rounded-box">
          <div class="flex justify-between mb-2">
            <span class="text-xs text-neutral-content">CPU: {{ cpuLoad }}%</span>
            <span class="text-xs text-neutral-content">RAM: {{ ramLoad }}%</span>
          </div>
          <svg width="100%" height="160" viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg">
            <!-- Оси графика -->
            <line x1="20" y1="20" x2="20" y2="140" stroke="currentColor" stroke-width="2" class="text-neutral-content" />
            <line x1="20" y1="140" x2="480" y2="140" stroke="currentColor" stroke-width="2" class="text-neutral-content" />

            <!-- Подписи осей -->
            <text x="10" y="60" fill="currentColor" font-size="12" text-anchor="middle" transform="rotate(-90,10,80)" class="text-neutral-content">Проценты</text>
            <text x="250" y="155" fill="currentColor" font-size="12" text-anchor="middle" class="text-neutral-content">Время</text>

            <!-- Деления на осях -->
            <line x1="20" y1="20" x2="25" y2="20" stroke="currentColor" stroke-width="1" class="text-neutral-content" />
            <text x="15" y="25" fill="currentColor" font-size="10" text-anchor="end" class="text-neutral-content">100</text>

            <line x1="20" y1="60" x2="25" y2="60" stroke="currentColor" stroke-width="1" class="text-neutral-content" />
            <text x="15" y="65" fill="currentColor" font-size="10" text-anchor="end" class="text-neutral-content">75</text>

            <line x1="20" y1="100" x2="25" y2="100" stroke="currentColor" stroke-width="1" class="text-neutral-content" />
            <text x="15" y="105" fill="currentColor" font-size="10" text-anchor="end" class="text-neutral-content">50</text>

            <line x1="20" y1="140" x2="25" y2="140" stroke="currentColor" stroke-width="1" class="text-neutral-content" />
            <text x="15" y="145" fill="currentColor" font-size="10" text-anchor="end" class="text-neutral-content">0</text>

            <!-- Горизонтальные линии сетки -->
            <line x1="20" y1="60" x2="480" y2="60" stroke="currentColor" stroke-width="1" stroke-dasharray="5,5" class="text-neutral-content opacity-30" />
            <line x1="20" y1="100" x2="480" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="5,5" class="text-neutral-content opacity-30" />

            <!-- График нагрузки CPU -->
            <polyline
                :points="cpuPoints"
                stroke="#5d8cde"
                stroke-width="2"
                fill="none"
                stroke-linejoin="round"
                stroke-linecap="round" />

            <!-- График нагрузки RAM -->
            <polyline
                :points="ramPoints"
                stroke="#de5d8c"
                stroke-width="2"
                fill="none"
                stroke-linejoin="round"
                stroke-linecap="round" />

            <!-- Точки на графике CPU -->
            <circle v-for="(point, index) in cpuPointsArray" :key="'cpu-'+index" :cx="point.x" :cy="point.y" r="2" fill="#5d8cde" />

            <!-- Точки на графике RAM -->
            <circle v-for="(point, index) in ramPointsArray" :key="'ram-'+index" :cx="point.x" :cy="point.y" r="2" fill="#de5d8c" />
          </svg>
          <div class="flex justify-center gap-4 mt-2">
            <div class="flex items-center">
              <div class="w-3 h-3 rounded-full bg-[#5d8cde] mr-1"></div>
              <span class="text-xs text-neutral-content">CPU</span>
            </div>
            <div class="flex items-center">
              <div class="w-3 h-3 rounded-full bg-[#de5d8c] mr-1"></div>
              <span class="text-xs text-neutral-content">RAM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed, watch } from 'vue';
import { DataSet } from 'vis-data';
import { Network } from 'vis-network';
import { useServerStore } from '@/stores/ServerStore';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const serverStore = useServerStore();
const serverId = route.params.id as string;
const networkInstance = ref<any>(null);
const isDarkTheme = ref(false);

// Данные для графика нагрузки
const cpuLoad = ref(0);
const ramLoad = ref(0);
const cpuHistory = ref<number[]>(Array(24).fill(0));
const ramHistory = ref<number[]>(Array(24).fill(0));

const currentServer = computed(() => {
  return serverStore.servers.find(s => s.server_id === serverId);
});

// Генерация точек для графика CPU
const cpuPoints = computed(() => {
  return cpuHistory.value.map((value, index) => {
    const x = 20 + (index * (460 / (cpuHistory.value.length - 1)));
    const y = 140 - (value * 1.2);
    return `${x},${y}`;
  }).join(' ');
});

// Генерация точек для графика RAM
const ramPoints = computed(() => {
  return ramHistory.value.map((value, index) => {
    const x = 20 + (index * (460 / (ramHistory.value.length - 1)));
    const y = 140 - (value * 1.2);
    return `${x},${y}`;
  }).join(' ');
});

// Массив точек для CPU (для отрисовки кружков)
const cpuPointsArray = computed(() => {
  return cpuHistory.value.map((value, index) => {
    const x = 20 + (index * (460 / (cpuHistory.value.length - 1)));
    const y = 140 - (value * 1.2);
    return { x, y };
  });
});

// Массив точек для RAM (для отрисовки кружков)
const ramPointsArray = computed(() => {
  return ramHistory.value.map((value, index) => {
    const x = 20 + (index * (460 / (ramHistory.value.length - 1)));
    const y = 140 - (value * 1.2);
    return { x, y };
  });
});

// Функция для обновления данных нагрузки
const updateLoadData = () => {
  // Генерация случайных значений нагрузки
  const newCpuLoad = Math.min(100, Math.max(0, cpuLoad.value + (Math.random() * 20 - 10)));
  const newRamLoad = Math.min(100, Math.max(0, ramLoad.value + (Math.random() * 15 - 7.5)));

  cpuLoad.value = Math.round(newCpuLoad * 10) / 10;
  ramLoad.value = Math.round(newRamLoad * 10) / 10;

  cpuHistory.value.shift();
  cpuHistory.value.push(cpuLoad.value);

  ramHistory.value.shift();
  ramHistory.value.push(ramLoad.value);
};

// Функция для форматирования списка элементов
const formatItems = (items: any) => {
  if (!items) return 'Не указано';
  if (Array.isArray(items)) {
    return items.map(item => item.domain_name || item.system_name || item.group_name).join(', ');
  }
  return items.domain_name || items.system_name || items.group_name || 'Не указано';
};

const goBack = () => {
  router.go(-1);
};

const checkTheme = () => {
  isDarkTheme.value = document.documentElement.getAttribute('data-theme') === 'dark';
};

onMounted(async () => {
  checkTheme();

  const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === 'data-theme') {
        checkTheme();
      }
    });
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });

  // Инициализация начальных значений нагрузки
  cpuLoad.value = Math.floor(Math.random() * 30 + 20);
  ramLoad.value = Math.floor(Math.random() * 40 + 30);
  cpuHistory.value = Array(24).fill(0).map(() => Math.floor(Math.random() * 30 + 20));
  ramHistory.value = Array(24).fill(0).map(() => Math.floor(Math.random() * 40 + 30));

  // Запуск обновления данных каждые 2 секунды
  const loadInterval = setInterval(updateLoadData, 2000);

  await serverStore.fetchServers();
  initNetwork();

  // Очистка интервала при размонтировании компонента
  onUnmounted(() => {
    clearInterval(loadInterval);
  });
});

watch(isDarkTheme, () => {
  if (networkInstance.value) {
    networkInstance.value.destroy();
    initNetwork();
  }
});

const initNetwork = () => {
  if (!serverStore.servers || serverStore.servers.length === 0) return;

  const nodes = new DataSet<any>();
  const edges = new DataSet<any>();

  const mainServer = serverStore.servers.find(s => s.server_id === serverId);
  if (!mainServer) return;

  // Добавляем основной сервер
  nodes.add({
    id: mainServer.server_id,
    label: mainServer.server_name,
    group: 'server',
    shape: 'box',
    color: {
      background: '#5d8cde',
      border: '#2c5aab',
      highlight: {
        background: '#64B5F6',
        border: '#42A5F5'
      }
    }
  });

  // Кластер
  if (mainServer.cluster_id) {
    nodes.add({
      id: mainServer.cluster_id.cluster_id,
      label: mainServer.cluster_id.cluster_name,
      group: 'cluster',
      shape: 'diamond',
      color: {
        background: '#9DADC9',
        border: '#4a515e',
        highlight: {
          background: '#a1bff7',
          border: '#6a81ad'
        }
      }
    });
    edges.add({
      from: mainServer.server_id,
      to: mainServer.cluster_id.cluster_id,
      arrows: 'to',
      label: 'входит в',
      color: { color: '#757575' }
    });
  }

  // Группы
  if (mainServer.group_id) {
    const groups = Array.isArray(mainServer.group_id) ? mainServer.group_id : [mainServer.group_id];
    groups.forEach(group => {
      nodes.add({
        id: group.group_id,
        label: group.group_name,
        group: 'group',
        shape: 'ellipse',
        color: {
          background: '#6d798c',
          border: '#4b5361',
          highlight: {
            background: '#99a5ba',
            border: '#606875'
          }
        }
      });
      edges.add({
        from: mainServer.server_id,
        to: group.group_id,
        arrows: 'to',
        label: 'в группе',
        color: { color: '#757575' }
      });
    });
  }

  // Системы
  if (mainServer.system_id) {
    const systems = Array.isArray(mainServer.system_id) ? mainServer.system_id : [mainServer.system_id];
    systems.forEach(system => {
      nodes.add({
        id: system.system_id,
        label: system.system_name,
        group: 'system',
        shape: 'box',
        color: {
          background: '#BB8D54',
          border: '#61492c',
          highlight: {
            background: '#FFB74D',
            border: '#FFA726'
          }
        }
      });
      edges.add({
        from: mainServer.server_id,
        to: system.system_id,
        arrows: 'to',
        label: 'использует',
        color: { color: '#607D8B' }
      });

      // Группы системы
      if (system.group_id) {
        const systemGroups = Array.isArray(system.group_id) ? system.group_id : [system.group_id];
        systemGroups.forEach(group => {
          if (!nodes.get(group.group_id)) {
            nodes.add({
              id: group.group_id,
              label: group.group_name,
              group: 'group',
              shape: 'ellipse',
              color: {
                background: '#6d798c',
                border: '#4b5361',
                highlight: {
                  background: '#99a5ba',
                  border: '#606875'
                }
              }
            });
          }
          edges.add({
            from: system.system_id,
            to: group.group_id,
            arrows: 'to',
            label: 'в группе',
            color: { color: '#607D8B' }
          });
        });
      }
    });
  }

  // Домены
  if (mainServer.domain_id) {
    const domains = Array.isArray(mainServer.domain_id) ? mainServer.domain_id : [mainServer.domain_id];
    domains.forEach(domain => {
      nodes.add({
        id: domain.domain_id,
        label: domain.domain_name,
        group: 'domain',
        shape: 'ellipse',
        color: {
          background: '#5674a8',
          border: '#3b4f73',
          highlight: {
            background: '#7996c7',
            border: '#465775'
          }
        }
      });
      edges.add({
        from: mainServer.server_id,
        to: domain.domain_id,
        arrows: 'to',
        label: 'домен',
        color: { color: '#795548' }
      });
    });
  }

  const textColor = isDarkTheme.value ? '#C3C3C3' : '#000000';

  // Конфигурация сети
  const options = {
    layout: {
      improvedLayout: true,
      randomSeed: 42,
      hierarchical: {
        enabled: false
      }
    },
    physics: {
      enabled: true,
      solver: 'forceAtlas2Based',
      forceAtlas2Based: {
        gravitationalConstant: -110,
        centralGravity: 0.01,
        springLength: 200,
        springConstant: 0.05,
        damping: 0.3,
        avoidOverlap: 1
      },
      stabilization: {
        enabled: true,
        iterations: 2000,
        updateInterval: 25
      }
    },
    nodes: {
      font: {
        size: 14,
        color: textColor
      },
      borderWidth: 1,
      shadow: {
        enabled: true,
        color: 'rgba(0,0,0,0.3)',
        size: 10,
        x: 5,
        y: 5
      },
      size: 30,
      margin: 15,
      widthConstraint: {
        maximum: 255
      }
    },
    edges: {
      width: 1,
      smooth: {
        type: 'continuous',
        roundness: 0.5
      },
      font: {
        strokeWidth: 0,
        color: textColor,
        size: 12,
        align: 'middle'
      },
      arrows: {
        to: {
          enabled: true,
          scaleFactor: 0.6,
          type: 'arrow'
        }
      },
      selectionWidth: 2,
      color: {
        inherit: 'from',
        opacity: 0.8
      },
      hoverWidth: 1.5
    },
    interaction: {
      dragNodes: false,
      dragView: true,
      hideEdgesOnDrag: false,
      hideNodesOnDrag: false,
      tooltipDelay: 200,
      multiselect: false,
      hover: true,
      keyboard: {
        enabled: true,
        speed: {
          x: 10,
          y: 10,
          zoom: 0.04
        },
        bindToWindow: true
      }
    }
  };

  const container = document.getElementById('network');
  if (container) {
    if (networkInstance.value) {
      networkInstance.value.destroy();
    }

    networkInstance.value = new Network(container, { nodes, edges }, options);

    // Обработчик клика по пустому месту
    networkInstance.value.on('click', (params: any) => {
      if (params.nodes.length === 0) {
        networkInstance.value.fit({
          animation: {
            duration: 1000,
            easingFunction: 'easeInOutQuad'
          }
        });
      }
    });
  }
};

useSeoMeta({
  title: 'Карта сервера',
  ogTitle: 'Карта сервера',
  description: 'Карта показывающая связи сервера',
  ogDescription: 'Карта показывающая связи сервера'
})
</script>

<style scoped>
.network-tooltip {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px;
  border-radius: 3px;
  font-size: 12px;
  pointer-events: none;
  z-index: 100;
}
</style>