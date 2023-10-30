export type ServiceType = 'servicePlumber' | 'serviceElectrician' | 'servicePainter' | 'serviceMechanic'

// export type ServiceType = 'servicePlumber' | 'serviceElectrician' | 'serviceCarpenter' | 'servicePainter' | 'serviceMason' | 'serviceGardener' | 'serviceCleaner' | 'serviceMechanic'

export interface Options {
  // // userId: string
  WORK_DATA: AddWorkDto
  typeService: ServiceType // tipo de serevicio
}
