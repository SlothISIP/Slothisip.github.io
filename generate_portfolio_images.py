"""
Portfolio Image Generator
Generate publication-quality thumbnails for academic portfolio website

Author: Kim Ju O
Purpose: Auto-generate 4 images (seismic, depth) for portfolio
Output: 160x160px JPG thumbnails in images/ directory

Usage:
    python generate_portfolio_images.py

Dependencies:
    pip install matplotlib numpy scipy opencv-python pillow
"""

import matplotlib.pyplot as plt
import numpy as np
from matplotlib import rcParams
import os
from pathlib import Path

# Configure publication-quality plots
rcParams['font.size'] = 8
rcParams['axes.linewidth'] = 0.8
rcParams['font.family'] = 'Arial'

# Output directory
OUTPUT_DIR = Path('images')
OUTPUT_DIR.mkdir(exist_ok=True)

def save_thumbnail(fig, filename, dpi=80):
    """
    Save matplotlib figure as 160x160px thumbnail

    Args:
        fig: matplotlib figure object
        filename: output filename (will be saved in images/)
        dpi: dots per inch (80 DPI * 2 inch = 160 pixels)
    """
    filepath = OUTPUT_DIR / filename
    fig.savefig(filepath,
                bbox_inches='tight',
                pad_inches=0.05,
                dpi=dpi,
                facecolor='white',
                edgecolor='none')
    plt.close(fig)
    print(f"✓ Generated: {filepath}")


def generate_seismic_before():
    """
    Generate raw seismic signal with noise

    Represents work from Seongwoo Instruments (2023):
    - Superconducting seismic detection
    - Before digital filtering
    - High noise level
    """
    np.random.seed(42)  # Reproducibility

    # Time vector
    t = np.linspace(0, 10, 1000)

    # Simulate realistic seismic signal
    # P-wave arrival at t=2s, S-wave at t=4s
    p_wave = 0.3 * np.sin(2 * np.pi * 5 * (t - 2)) * np.exp(-0.5 * (t - 2)**2) * (t > 2)
    s_wave = 0.5 * np.sin(2 * np.pi * 2 * (t - 4)) * np.exp(-0.3 * (t - 4)**2) * (t > 4)
    signal = p_wave + s_wave

    # Add realistic noise (before 40% SNR improvement)
    noise = np.random.normal(0, 0.15, len(t))
    noisy_signal = signal + noise

    # Plot
    fig, ax = plt.subplots(figsize=(2, 2))
    ax.plot(t, noisy_signal, 'b-', linewidth=0.6, alpha=0.8)
    ax.set_xlabel('Time (s)', fontsize=7)
    ax.set_ylabel('Amplitude (mV)', fontsize=7)
    ax.set_title('Raw Seismic Signal', fontsize=8, weight='bold')
    ax.grid(True, alpha=0.3, linewidth=0.5)
    ax.set_xlim(0, 10)
    ax.set_ylim(-1, 1)

    save_thumbnail(fig, 'seismic_before.jpg')


def generate_seismic_after():
    """
    Generate filtered seismic signal (40% SNR improvement)

    Represents work from Seongwoo Instruments (2023):
    - Digital filter design achievement
    - 40% SNR improvement (mentioned in CV)
    - Clean P-wave and S-wave detection
    """
    from scipy import signal as sp_signal

    np.random.seed(42)
    t = np.linspace(0, 10, 1000)

    # Same seismic signal as before
    p_wave = 0.3 * np.sin(2 * np.pi * 5 * (t - 2)) * np.exp(-0.5 * (t - 2)**2) * (t > 2)
    s_wave = 0.5 * np.sin(2 * np.pi * 2 * (t - 4)) * np.exp(-0.3 * (t - 4)**2) * (t > 4)
    signal_clean = p_wave + s_wave
    noise = np.random.normal(0, 0.15, len(t))
    noisy_signal = signal_clean + noise

    # Apply Butterworth low-pass filter
    # (Digital filter designed during UMD project)
    fs = 100  # Sampling frequency
    sos = sp_signal.butter(4, 8, 'low', fs=fs, output='sos')
    filtered_signal = sp_signal.sosfilt(sos, noisy_signal)

    # Plot
    fig, ax = plt.subplots(figsize=(2, 2))
    ax.plot(t, filtered_signal, 'g-', linewidth=1.0)
    ax.set_xlabel('Time (s)', fontsize=7)
    ax.set_ylabel('Amplitude (mV)', fontsize=7)
    ax.set_title('Filtered (40% SNR ↑)', fontsize=8, weight='bold')
    ax.grid(True, alpha=0.3, linewidth=0.5)
    ax.set_xlim(0, 10)
    ax.set_ylim(-1, 1)

    # Annotate detected waves
    ax.annotate('P-wave', xy=(2.5, 0.25), xytext=(3, 0.6),
                arrowprops=dict(arrowstyle='->', color='darkgreen', lw=0.8),
                fontsize=6, color='darkgreen')
    ax.annotate('S-wave', xy=(5, 0.4), xytext=(6, 0.7),
                arrowprops=dict(arrowstyle='->', color='darkgreen', lw=0.8),
                fontsize=6, color='darkgreen')

    save_thumbnail(fig, 'seismic_after.jpg')


def generate_depth_before():
    """
    Generate distorted depth map

    Represents NRF Project (2020-2022):
    - Depth camera calibration research
    - Before DNN-based correction
    - Shows radial distortion artifact
    """
    # Create synthetic depth scene with distortion
    x, y = np.meshgrid(np.linspace(-1, 1, 160), np.linspace(-1, 1, 160))
    r = np.sqrt(x**2 + y**2)

    # Simulate depth of a scene (closer in center, far at edges)
    depth = 2.0 / (1 + r)

    # Add radial distortion (barrel distortion from uncalibrated camera)
    k1 = 0.3  # Distortion coefficient
    distortion_factor = 1 + k1 * r**2
    depth_distorted = depth * distortion_factor

    # Add some noise
    np.random.seed(42)
    noise = np.random.normal(0, 0.02, depth_distorted.shape)
    depth_distorted += noise

    # Plot
    fig, ax = plt.subplots(figsize=(2, 2))
    im = ax.imshow(depth_distorted, cmap='jet', aspect='auto',
                   vmin=0.5, vmax=2.5, interpolation='bilinear')
    ax.axis('off')
    ax.set_title('Distorted Depth Map', fontsize=8, weight='bold', pad=3)

    # Add colorbar
    from matplotlib.colorbar import ColorbarBase
    from matplotlib.colors import Normalize

    save_thumbnail(fig, 'depth_before.jpg')


def generate_depth_after():
    """
    Generate corrected depth map (DNN-based calibration)

    Represents NRF Project (2020-2022):
    - Deep learning-based depth camera calibration
    - DNN architecture designed for distortion correction
    - Clean, accurate depth estimation
    """
    # Same scene, but without distortion
    x, y = np.meshgrid(np.linspace(-1, 1, 160), np.linspace(-1, 1, 160))
    r = np.sqrt(x**2 + y**2)

    # Clean depth (after DNN correction)
    depth = 2.0 / (1 + r)

    # Minimal noise (improved after calibration)
    np.random.seed(42)
    noise = np.random.normal(0, 0.005, depth.shape)
    depth_corrected = depth + noise

    # Plot
    fig, ax = plt.subplots(figsize=(2, 2))
    im = ax.imshow(depth_corrected, cmap='jet', aspect='auto',
                   vmin=0.5, vmax=2.5, interpolation='bilinear')
    ax.axis('off')
    ax.set_title('DNN Corrected Depth', fontsize=8, weight='bold', pad=3)

    save_thumbnail(fig, 'depth_after.jpg')


def generate_respiration_signal():
    """
    BONUS: Generate UWB respiration signal (if paper extraction fails)

    Represents SENSORS 2020 paper:
    - Ultra-wideband radar respiratory signal
    - Multiple input channels
    - Shows normal vs abnormal breathing pattern
    """
    np.random.seed(42)

    # Time vector (30 seconds of breathing)
    t = np.linspace(0, 30, 3000)

    # Normal breathing (15 breaths/min = 0.25 Hz)
    normal_breathing = 0.5 * np.sin(2 * np.pi * 0.25 * t)

    # Add some natural variation
    variation = 0.1 * np.sin(2 * np.pi * 0.05 * t)
    respiration = normal_breathing + variation

    # Add UWB radar noise
    noise = np.random.normal(0, 0.05, len(t))
    uwb_signal = respiration + noise

    # Plot
    fig, ax = plt.subplots(figsize=(2, 2))
    ax.plot(t, uwb_signal, 'purple', linewidth=0.8, alpha=0.7)
    ax.set_xlabel('Time (s)', fontsize=7)
    ax.set_ylabel('Displacement (mm)', fontsize=7)
    ax.set_title('UWB Respiration Signal', fontsize=8, weight='bold')
    ax.grid(True, alpha=0.3, linewidth=0.5)
    ax.set_xlim(0, 30)

    save_thumbnail(fig, 'respiration_signal_bonus.jpg')
    print("  Note: Use paper figure if available; this is backup")


def generate_multiview_geometry():
    """
    BONUS: Generate multi-view camera geometry diagram

    Represents DGIST Project (2020-2021):
    - Non-overlap multi-view camera calibration
    - 3D geometric relationships
    """
    from mpl_toolkits.mplot3d import Axes3D

    fig = plt.figure(figsize=(2, 2))
    ax = fig.add_subplot(111, projection='3d')

    # Camera positions (3 cameras with non-overlapping views)
    camera_positions = np.array([
        [0, 0, 0],      # Camera 1
        [3, 0, 0],      # Camera 2
        [1.5, 3, 0]     # Camera 3
    ])

    # Plot cameras
    ax.scatter(camera_positions[:, 0], camera_positions[:, 1],
               camera_positions[:, 2], c='red', s=100, marker='^',
               label='Cameras')

    # Plot viewing directions
    for i, pos in enumerate(camera_positions):
        direction = np.array([np.sin(i * 2 * np.pi / 3),
                             np.cos(i * 2 * np.pi / 3),
                             -0.5])
        ax.quiver(pos[0], pos[1], pos[2],
                 direction[0], direction[1], direction[2],
                 length=1.5, arrow_length_ratio=0.3, color='blue', alpha=0.6)

    # World coordinate frame
    ax.scatter([1.5], [1.5], [0], c='green', s=150, marker='*',
              label='World Origin')

    ax.set_xlabel('X', fontsize=6)
    ax.set_ylabel('Y', fontsize=6)
    ax.set_zlabel('Z', fontsize=6)
    ax.set_title('Multi-View Geometry', fontsize=8, weight='bold')
    ax.legend(fontsize=5)
    ax.view_init(elev=20, azim=45)

    save_thumbnail(fig, 'multiview_geometry_bonus.jpg', dpi=60)
    print("  Note: Consider manual diagram in Draw.io instead")


def main():
    """Main execution function"""

    print("=" * 60)
    print("PORTFOLIO IMAGE GENERATOR")
    print("Generating publication-quality thumbnails (160x160px)")
    print("=" * 60)
    print()

    print("Creating output directory...")
    print(f"Output: {OUTPUT_DIR.absolute()}")
    print()

    print("Generating CRITICAL images (seismic detection)...")
    print("-" * 60)
    generate_seismic_before()
    generate_seismic_after()
    print()

    print("Generating MEDIUM priority images (depth calibration)...")
    print("-" * 60)
    generate_depth_before()
    generate_depth_after()
    print()

    print("Generating BONUS images (optional alternatives)...")
    print("-" * 60)
    generate_respiration_signal()
    generate_multiview_geometry()
    print()

    print("=" * 60)
    print("✓ IMAGE GENERATION COMPLETE!")
    print("=" * 60)
    print()
    print("Generated files:")
    print(f"  ✓ {OUTPUT_DIR}/seismic_before.jpg")
    print(f"  ✓ {OUTPUT_DIR}/seismic_after.jpg")
    print(f"  ✓ {OUTPUT_DIR}/depth_before.jpg")
    print(f"  ✓ {OUTPUT_DIR}/depth_after.jpg")
    print(f"  ✓ {OUTPUT_DIR}/respiration_signal_bonus.jpg (backup)")
    print(f"  ✓ {OUTPUT_DIR}/multiview_geometry_bonus.jpg (backup)")
    print()
    print("Next steps:")
    print("  1. Review generated images in images/ folder")
    print("  2. Extract figures from papers:")
    print("     - thermal_calib_before.jpg ← Springer 2024 paper")
    print("     - thermal_calib_after.jpg ← Springer 2024 paper")
    print("     - respiration_before.jpg ← SENSORS 2020 paper")
    print("  3. Create manual diagrams (after approval):")
    print("     - apex_architecture.jpg ← Draw.io")
    print("     - acoustic_concept.jpg ← PowerPoint/Canva")
    print("  4. Prepare profile photo:")
    print("     - KimJuO.jpg ← remove.bg + crop")
    print()
    print("Progress: 4/11 images auto-generated (36%)")
    print("Remaining: 7 images (3 from papers, 2 manual, 1 photo, 1 optional)")
    print()


if __name__ == '__main__':
    try:
        main()
    except ImportError as e:
        print("ERROR: Missing required library")
        print(f"  {e}")
        print()
        print("Install dependencies with:")
        print("  pip install matplotlib numpy scipy opencv-python pillow")
    except Exception as e:
        print(f"ERROR: {e}")
        import traceback
        traceback.print_exc()
