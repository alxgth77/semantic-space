// src/app/page.tsx
'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BrainCircuit } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Semantic Space Visualizer
        </h1>
        
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BrainCircuit className="w-6 h-6" />
              Анализ семантического пространства
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Добро пожаловать в визуализатор семантического пространства.
                Этот инструмент помогает анализировать и визуализировать
                семантические связи между различными областями знаний.
              </p>
              
              {/* Здесь позже добавим компоненты визуализации */}
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">
                  Компоненты визуализации будут добавлены в ближайшее время
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
