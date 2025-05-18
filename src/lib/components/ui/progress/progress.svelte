<script lang="ts">
	import { cn } from '$lib/utils/common';
	import { Progress as ProgressPrimitive, type WithoutChildrenOrChild } from 'bits-ui';

	type Props = WithoutChildrenOrChild<ProgressPrimitive.RootProps>;

	let { ref = $bindable(null), class: className, max = 100, value, ...restProps }: Props = $props();

	const percentageRemaining = $derived.by(() => {
		const percentageFilled = ((value ?? 0) / (max ?? 1)) * 100;
		return 100 - percentageFilled;
	});
</script>

<ProgressPrimitive.Root
	bind:ref
	class={cn('bg-secondary relative h-4 w-full overflow-hidden rounded-full', className)}
	{value}
	{max}
	{...restProps}
>
	<div
		class="bg-primary size-full flex-1 transition-all"
		style={`transform: translateX(-${percentageRemaining}%)`}
	></div>
</ProgressPrimitive.Root>
